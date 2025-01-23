import { Component, ElementRef, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/**
 * Component for applying backgrounds to images.
 * Allows users to select a background and apply it to an uploaded image.
 */
@Component({
  selector: 'app-applybackground',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './applybackground.component.html',
  styleUrls: ['./applybackground.component.css'],
})
export class ApplybackgroundComponent implements OnInit, AfterViewInit {
  /**
   * Reference to the canvas element used for image editing.
   */
  @ViewChild('canvas', { static: false }) canvas!: ElementRef<HTMLCanvasElement>;

  private ctx!: CanvasRenderingContext2D;

  /**
   * Base64 representation of the received image.
   */
  receivedImage: string | null = null;

  /**
   * Filename of the received image.
   */
  imageFilename: string | null = null;

  /**
   * Authentication token for API requests.
   */
  token: string | null = null;

  /**
   * List of available backgrounds retrieved from the server.
   */
  availableBackgrounds: string[] = [];

  /**
   * Selected background URL.
   */
  selectedBackground: string | null = null;

  /**
   * Constructor for the ApplybackgroundComponent.
   * @param route The ActivatedRoute service for accessing query parameters.
   * @param http The HttpClient service for making API requests.
   */
  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  /**
   * Lifecycle hook called on component initialization.
   * Retrieves query parameters and available backgrounds from the server.
   */
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.receivedImage = params['image'];
      this.imageFilename = params['filename'];
      this.token = params['token'];

      if (!this.receivedImage) {
        console.error('No image received (receivedImage is null or undefined).');
      } else {
        console.log('Received image:');
        console.log('Filename:', this.imageFilename);
        console.log('Token:', this.token);
      }
    });

    this.loadBackgrounds();
  }

  /**
   * Loads the list of available backgrounds from the server.
   */
  loadBackgrounds(): void {
    this.http.get<string[]>('http://localhost:8000/api/backgrounds').subscribe(
      (backgrounds) => {
        this.availableBackgrounds = backgrounds.map((bg) => `http://localhost:8000/uploads/background/${bg}`);
      },
      (error) => {
        console.error('Error loading backgrounds:', error);
      }
    );
  }

  /**
   * Lifecycle hook called after the view has been initialized.
   * Draws the received image onto the canvas.
   */
  ngAfterViewInit(): void {
    if (this.receivedImage) {
      this.drawImageOnCanvas();
    }
  }

  /**
   * Draws the received image onto the canvas.
   */
  drawImageOnCanvas(): void {
    if (!this.receivedImage) return;

    const canvas = this.canvas.nativeElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error('Canvas context is missing');
      return;
    }

    const img = new Image();
    img.src = this.receivedImage;
    img.crossOrigin = 'anonymous';

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      this.ctx = ctx;
      console.log('Image drawn on canvas.');
    };

    img.onerror = () => {
      console.error('Error loading the image.');
    };
  }

  /**
   * Applies the selected background to the received image and draws it onto the canvas.
   * @param backgroundUrl The URL of the selected background.
   */
  applyBackground(backgroundUrl: string): void {
    if (!this.receivedImage) return;

    const canvas = this.canvas.nativeElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error('Canvas context is missing');
      return;
    }

    const background = new Image();
    background.src = backgroundUrl;
    background.crossOrigin = 'anonymous';

    const userImage = new Image();
    userImage.src = this.receivedImage;
    userImage.crossOrigin = 'anonymous';

    background.onload = () => {
      userImage.onload = () => {
        canvas.width = userImage.width;
        canvas.height = userImage.height;

        const bgAspectRatio = background.width / background.height;
        const userAspectRatio = userImage.width / userImage.height;

        let bgWidth, bgHeight, bgX, bgY;

        if (userAspectRatio > bgAspectRatio) {
          bgWidth = userImage.width;
          bgHeight = userImage.width / bgAspectRatio;
          bgX = 0;
          bgY = (userImage.height - bgHeight) / 2;
        } else {
          bgHeight = userImage.height;
          bgWidth = userImage.height * bgAspectRatio;
          bgX = (userImage.width - bgWidth) / 2;
          bgY = 0;
        }

        ctx.drawImage(background, bgX, bgY, bgWidth, bgHeight);
        ctx.drawImage(userImage, 0, 0, userImage.width, userImage.height);

        console.log('Background applied to the image.');
      };
    };

    background.onerror = () => {
      console.error('Error loading the background.');
    };
  }

  /**
   * Saves the edited image with the applied background to the server.
   */
  onSave(): void {
    if (!this.imageFilename || !this.token) {
      console.error('Cannot save the image - missing required data.');
      return;
    }

    const canvas = this.canvas.nativeElement;
    const imageData = canvas.toDataURL('image/png');
    const blob = this.base64ToBlob(imageData);

    const headers = new HttpHeaders().set('Authorization', this.token || '');
    const formData = new FormData();
    formData.append('image', blob, this.imageFilename);

    this.http
      .post('http://localhost:8000/api/save-image-with-background', formData, { headers })
      .subscribe(
        () => {
          console.log('Image saved successfully.');
        },
        (error) => {
          console.error('Error saving the image:', error);
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
}
