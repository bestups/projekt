import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../shared/services/auth.service';
import { RouterModule } from '@angular/router';

/**
 * Interface representing an image object.
 */
interface Image {
  /**
   * Filename of the image.
   */
  filename: string;

  /**
   * URL of the image.
   */
  url: string;

  /**
   * ID of the user who uploaded the image.
   */
  userId: string;
}

/**
 * Component for managing and displaying the image gallery.
 * Provides functionality for uploading, editing, renaming, and deleting images.
 */
@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements AfterViewInit {
  /**
   * List of images in the gallery.
   */
  images: Image[] = [];

  /**
   * Currently selected image for editing.
   */
  selectedImage: Image | null = null;

  /**
   * File selected for upload.
   */
  selectedFile: File | null = null;

  /**
   * Reference to the canvas element for image editing.
   */
  @ViewChild('canvas', { static: false }) canvas!: ElementRef<HTMLCanvasElement>;

  private ctx!: CanvasRenderingContext2D;
  private drawing = false;
  private tool: 'brush' | 'eraser' = 'brush';

  /**
   * Constructor for the GalleryComponent.
   * @param http The HTTP client used for API requests.
   * @param authService The authentication service for managing user sessions.
   */
  constructor(private http: HttpClient, private authService: AuthService) {}

  /**
   * Lifecycle hook called after component initialization.
   * Fetches the list of images from the server.
   */
  ngOnInit(): void {
    this.fetchImages();
  }

  /**
   * Lifecycle hook called after the view has been initialized.
   * Ensures the canvas is set up for editing the selected image.
   */
  ngAfterViewInit(): void {
    if (this.selectedImage) {
      this.initCanvas();
    }
  }

  /**
   * Fetches the list of images from the server.
   */
  fetchImages(): void {
    const headers = new HttpHeaders().set(
      'Authorization',
      this.authService.getToken() || ''
    );
    this.http.get<Image[]>('http://localhost:8000/api/images', { headers }).subscribe(
      (data: Image[]) => {
        this.images = data;
      },
      (error) => {
        console.error('Error fetching images:', error);
      }
    );
  }

  /**
   * Opens an image for editing.
   * @param image The image to open.
   */
  openImage(image: Image): void {
    this.selectedImage = image;
    setTimeout(() => this.initCanvas(), 0);
  }

  /**
   * Closes the currently open image.
   */
  closeImage(): void {
    this.selectedImage = null;
  }

  /**
   * Renames an image.
   * @param image The image to rename.
   */
  onRename(image: Image): void {
    const newName = prompt('Enter new name for the image:', image.filename);
    if (newName) {
      const headers = new HttpHeaders().set(
        'Authorization',
        this.authService.getToken() || ''
      );
      this.http
        .post(
          'http://localhost:8000/api/rename',
          { filename: image.filename, newName },
          { headers }
        )
        .subscribe(
          () => {
            console.log(`Renamed ${image.filename} to ${newName}`);
            this.fetchImages();
          },
          (error) => {
            console.error('Error renaming image:', error);
          }
        );
    }
  }

  /**
   * Deletes an image.
   * @param image The image to delete.
   */
  onDelete(image: Image): void {
    if (confirm(`Are you sure you want to delete ${image.filename}?`)) {
      const headers = new HttpHeaders().set(
        'Authorization',
        this.authService.getToken() || ''
      );
      this.http
        .post(
          'http://localhost:8000/api/delete',
          { filename: image.filename },
          { headers }
        )
        .subscribe(
          () => {
            console.log(`Deleted ${image.filename}`);
            this.fetchImages();
          },
          (error) => {
            console.error('Error deleting image:', error);
          }
        );
    }
  }

  /**
   * Handles file selection for upload.
   * @param event The file input event.
   */
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  /**
   * Uploads a selected file to the server.
   */
  onUpload(): void {
    if (!this.selectedFile) return;

    const headers = new HttpHeaders().set(
      'Authorization',
      this.authService.getToken() || ''
    );
    const formData = new FormData();
    formData.append('image', this.selectedFile);

    this.http.post('http://localhost:8000/api/upload', formData, { headers }).subscribe(
      () => {
        this.fetchImages();
      },
      (error) => {
        console.error('Error uploading image:', error);
      }
    );
  }

  /**
   * Sets the drawing tool to brush.
   */
  setBrush(): void {
    this.tool = 'brush';
  }

  /**
   * Sets the drawing tool to eraser.
   */
  setEraser(): void {
    this.tool = 'eraser';
  }

  /**
   * Applies transparency to the selected image and saves it to the server.
   */
  applyTransparency(): void {
    if (!this.selectedImage) {
      console.error('No image selected for editing.');
      return;
    }

    const canvas = this.canvas.nativeElement;

    canvas.toBlob(
      (blob) => {
        if (!blob) {
          console.error('Failed to generate blob from canvas.');
          return;
        }

        const formData = new FormData();
        formData.append(
          'image',
          blob,
          this.selectedImage?.filename || 'edited-image.png'
        );

        const headers = new HttpHeaders().set(
          'Authorization',
          this.authService.getToken() || ''
        );

        this.http
          .post('http://localhost:8000/api/edit', formData, { headers })
          .subscribe(
            () => {
              console.log('Transparency applied successfully');
              this.closeImage();
              this.fetchImages();
            },
            (error) => {
              console.error('Error applying transparency:', error);
            }
          );
      },
      'image/png'
    );
  }

  /**
   * Initializes the canvas for editing.
   */
  private initCanvas(): void {
    const canvas = this.canvas.nativeElement;
    const image = new Image();
    image.src = this.selectedImage!.url;

    image.onload = () => {
      canvas.width = image.width;
      canvas.height = image.height;
      this.ctx = canvas.getContext('2d')!;
      this.ctx.drawImage(image, 0, 0);
    };

    canvas.addEventListener('mousedown', this.startDrawing.bind(this));
    canvas.addEventListener('mousemove', this.draw.bind(this));
    canvas.addEventListener('mouseup', this.stopDrawing.bind(this));
    canvas.addEventListener('mouseleave', this.stopDrawing.bind(this));
  }

  /**
   * Starts drawing on the canvas.
   * @param event The mouse event.
   */
  private startDrawing(event: MouseEvent): void {
    this.drawing = true;
    this.ctx.beginPath();
    this.ctx.moveTo(event.offsetX, event.offsetY);
  }

  /**
   * Draws on the canvas.
   * @param event The mouse event.
   */
  private draw(event: MouseEvent): void {
    if (!this.drawing) return;

    this.ctx.lineTo(event.offsetX, event.offsetY);
    this.ctx.strokeStyle = this.tool === 'brush' ? 'black' : 'white';
    this.ctx.lineWidth = this.tool === 'brush' ? 5 : 10;
    this.ctx.stroke();
  }

  /**
   * Stops drawing on the canvas.
   */
  private stopDrawing(): void {
    this.drawing = false;
    this.ctx.closePath();
  }

  /**
   * Logs out the user by clearing the session and redirecting to the login page.
   */
  onLogout(): void {
    this.authService.logout();
    window.location.href = '/';
  }
}
