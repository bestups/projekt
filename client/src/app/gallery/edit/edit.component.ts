import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-backend-webgl';
import * as bodyPix from '@tensorflow-models/body-pix';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  imageUrl: string | null = null;
  imageFilename: string | null = null;
  editedImage: string | null = null;
  maskApplied = false; // Flaga kontrolująca zastosowanie maski

  @ViewChild('canvas', { static: false }) canvas!: ElementRef<HTMLCanvasElement>;

  protected  ctx!: CanvasRenderingContext2D;
  private net!: bodyPix.BodyPix;

  canvasWidth!: number;
  canvasHeight!: number;
  windowWidth!: number;
  windowHeight!: number;
  backButtonPosition = { left: 0 };
  fileNamePosition = { right: 0 };

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private authService: AuthService
  ) {}

  async ngOnInit(): Promise<void> {
    await this.configureBackend();

    this.route.queryParams.subscribe((params) => {
      this.imageUrl = params['url'];
      this.imageFilename = params['filename'];
    });

    if (this.imageUrl) {
      await this.loadModel();
      this.initializeCanvas();
    }

    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions.bind(this));
  }

  private async configureBackend(): Promise<void> {
    try {
      await tf.setBackend('webgl');
      await tf.ready();
      console.log(`Używany backend: ${tf.getBackend()}`);
    } catch (error) {
      console.warn('WebGL nie jest wspierany. Przełączam na backend CPU.');
      await tf.setBackend('cpu');
      console.log(`Używany backend: ${tf.getBackend()}`);
    }
  }

  private async loadModel(): Promise<void> {
    try {
      this.net = await bodyPix.load();
      console.log('BodyPix model loaded successfully');
    } catch (error) {
      console.error('Error loading BodyPix model:', error);
    }
  }

  private initializeCanvas(): void {
    const canvas = this.canvas.nativeElement;
    const ctx = canvas.getContext('2d');

    if (!ctx || !this.imageUrl) {
      console.error('Brak kontekstu płótna lub URL obrazu');
      return;
    }

    const img = new Image();
    img.src = this.imageUrl;
    img.crossOrigin = 'anonymous';

    img.onload = () => {
      const { width, height } = this.calculateDisplayDimensions(img.width, img.height);
      canvas.width = width;
      canvas.height = height;

      ctx.drawImage(img, 0, 0, width, height);
      this.ctx = ctx;

      this.canvasWidth = width;
      this.canvasHeight = height;

      this.updateDynamicPositions();
      this.editedImage = canvas.toDataURL('image/png');
    };
  }

  private calculateDisplayDimensions(imageWidth: number, imageHeight: number): { width: number; height: number } {
    const widthRatio = this.windowWidth / imageWidth;
    const heightRatio = this.windowHeight / imageHeight;
    const scale = Math.min(widthRatio, heightRatio);

    return {
      width: Math.round(imageWidth * scale),
      height: Math.round(imageHeight * scale),
    };
  }

  private updateWindowDimensions(): void {
    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;
    this.updateDynamicPositions();
  }

  private updateDynamicPositions(): void {
    if (this.canvasWidth && this.canvasHeight) {
      const leftOffset = (this.windowWidth - this.canvasWidth) / 2;
      this.backButtonPosition.left = Math.max(leftOffset - this.canvasWidth * 0.05, 10);

      const rightOffset = (this.windowWidth - this.canvasWidth) / 2;
      this.fileNamePosition.right = Math.max(rightOffset - this.canvasWidth * 0.05, 10);
    }
  }

  async applyBodyPix(): Promise<void> {
    if (!this.ctx || !this.canvas || !this.net) {
      console.error('Canvas, Context lub BodyPix model nie jest gotowy.');
      return;
    }

    const canvas = this.canvas.nativeElement;
    const ctx = this.ctx;

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const segmentation = await this.net.segmentPerson(canvas);

    const segmentationTensor = tf.tensor(segmentation.data, [segmentation.height, segmentation.width, 1], 'int32') as tf.Tensor3D;
    const resizedMaskTensor = tf.image.resizeBilinear(segmentationTensor, [canvas.height, canvas.width]);
    const resizedMask = resizedMaskTensor.squeeze().arraySync() as number[][];

    for (let y = 0; y < canvas.height; y++) {
      for (let x = 0; x < canvas.width; x++) {
        const index = (y * canvas.width + x) * 4;
        const isPerson = resizedMask[y][x] > 0.5;

        if (!isPerson) {
          imageData.data[index] = 0;
          imageData.data[index + 1] = 0;
          imageData.data[index + 2] = 0;
          imageData.data[index + 3] = 0;
        }
      }
    }

    ctx.putImageData(imageData, 0, 0);

    this.editedImage = canvas.toDataURL('image/png');
    this.maskApplied = true; // Zastosowanie maski
    console.log('AI mask applied.');
  }

  onSave(): void {
    if (!this.editedImage || !this.imageFilename || !this.maskApplied) {
      console.error('Maska nie została zastosowana lub brak obrazu do zapisania.');
      return;
    }

    const headers = new HttpHeaders().set(
      'Authorization',
      this.authService.getToken() || ''
    );

    const blob = this.base64ToBlob(this.editedImage);
    const formData = new FormData();
    formData.append('image', blob, this.imageFilename);

    this.http
      .post('http://localhost:8000/api/save-edited-image', formData, { headers })
      .subscribe(
        () => {
          console.log('Obraz zapisany pomyślnie');
        },
        (error) => {
          console.error('Błąd podczas zapisywania obrazu:', error);
        }
      );
  }

  private base64ToBlob(base64: string): Blob {
    const byteString = atob(base64.split(',')[1]);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const uintArray = new Uint8Array(arrayBuffer);

    for (let i = 0; i < byteString.length; i++) {
      uintArray[i] = byteString.charCodeAt(i);
    }

    return new Blob([uintArray], { type: 'image/png' });
  }
}
