import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-backend-webgl';
import * as bodyPix from '@tensorflow-models/body-pix';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../shared/services/auth.service';

/**
 * Component for editing images using AI-powered segmentation with BodyPix.
 * Provides functionality for applying masks to images and saving edited results.
 */
@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  /**
   * URL of the image to be edited.
   */
  imageUrl: string | null = null;

  /**
   * Filename of the image being edited.
   */
  imageFilename: string | null = null;

  /**
   * Base64 string of the edited image.
   */
  editedImage: string | null = null;

  /**
   * Indicates whether the mask has been applied to the image.
   */
  maskApplied = false;

  /**
   * Reference to the canvas element used for image editing.
   */
  @ViewChild('canvas', { static: false }) canvas!: ElementRef<HTMLCanvasElement>;

  protected ctx!: CanvasRenderingContext2D;
  private net!: bodyPix.BodyPix;

  canvasWidth!: number;
  canvasHeight!: number;
  windowWidth!: number;
  windowHeight!: number;

  backButtonPosition = { left: 0 };
  fileNamePosition = { right: 0 };

  /**
   * Constructor for the EditComponent.
   * @param route The ActivatedRoute service for accessing query parameters.
   * @param http The HttpClient service for making API requests.
   * @param authService The AuthService for managing user authentication.
   * @param router The Router service for navigation.
   */
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) {}

  /**
   * Lifecycle hook called on component initialization.
   * Configures the backend, loads the image, and initializes the canvas.
   */
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

  /**
   * Configures the TensorFlow.js backend (WebGL or CPU).
   */
  private async configureBackend(): Promise<void> {
    try {
      await tf.setBackend('webgl');
      await tf.ready();
      console.log(`Using backend: ${tf.getBackend()}`);
    } catch (error) {
      console.warn('WebGL not supported. Switching to CPU backend.');
      await tf.setBackend('cpu');
      console.log(`Using backend: ${tf.getBackend()}`);
    }
  }

  /**
   * Loads the BodyPix model for segmentation.
   */
  private async loadModel(): Promise<void> {
    try {
      this.net = await bodyPix.load();
      console.log('BodyPix model loaded successfully');
    } catch (error) {
      console.error('Error loading BodyPix model:', error);
    }
  }

  /**
   * Initializes the canvas element and draws the loaded image onto it.
   */
  private initializeCanvas(): void {
    const canvas = this.canvas.nativeElement;
    const ctx = canvas.getContext('2d');

    if (!ctx || !this.imageUrl) {
      console.error('Canvas context or image URL is missing');
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

  /**
   * Calculates display dimensions for the image based on the window size.
   * @param imageWidth The original width of the image.
   * @param imageHeight The original height of the image.
   * @returns The scaled width and height of the image.
   */
  private calculateDisplayDimensions(imageWidth: number, imageHeight: number): { width: number; height: number } {
    const widthRatio = this.windowWidth / imageWidth;
    const heightRatio = this.windowHeight / imageHeight;
    const scale = Math.min(widthRatio, heightRatio);

    return {
      width: Math.round(imageWidth * scale),
      height: Math.round(imageHeight * scale),
    };
  }

  /**
   * Updates window dimensions and dynamic positions of UI elements.
   */
  private updateWindowDimensions(): void {
    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;
    this.updateDynamicPositions();
  }

  /**
   * Updates dynamic positions for UI elements like the back button.
   */
  private updateDynamicPositions(): void {
    if (this.canvasWidth && this.canvasHeight) {
      const leftOffset = (this.windowWidth - this.canvasWidth) / 2;
      this.backButtonPosition.left = Math.max(leftOffset - this.canvasWidth * 0.05, 10);

      const rightOffset = (this.windowWidth - this.canvasWidth) / 2;
      this.fileNamePosition.right = Math.max(rightOffset - this.canvasWidth * 0.05, 10);
    }
  }

  /**
   * Applies the BodyPix model to segment the image and mask the background.
   */
  async applyBodyPix(): Promise<void> {
    if (!this.ctx || !this.canvas || !this.net) {
      console.error('Canvas, context, or BodyPix model is not ready.');
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
    this.maskApplied = true;
    console.log('AI mask applied.');
  }

  /**
   * Saves the edited image to the server.
   */
  onSave(): void {
    if (!this.editedImage || !this.imageFilename || !this.maskApplied) {
      console.error('Mask not applied or no image to save.');
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
          console.log('Image saved successfully');
        },
        (error) => {
          console.error('Error saving image:', error);
        }
      );
  }

  /**
   * Converts a Base64 string to a Blob object.
   * @param base64 The Base64 string.
   * @returns A Blob object.
   */
  private base64ToBlob(base64: string): Blob {
    const byteString = atob(base64.split(',')[1]);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const uintArray = new Uint8Array(arrayBuffer);

    for (let i = 0; i < byteString.length; i++) {
      uintArray[i] = byteString.charCodeAt(i);
    }

    return new Blob([uintArray], { type: 'image/png' });
  }

  /**
   * Navigates to the background application page with the edited image data.
   */
  navigateToApplyBackground(): void {
    if (!this.editedImage || !this.imageFilename) {
      console.error('No image or filename to pass.');
      return;
    }

    const token = this.authService.getToken();

    this.router.navigate(['/applybackground'], {
      queryParams: {
        image: this.editedImage,
        filename: this.imageFilename,
        token: token,
      },
    });
  }
}
