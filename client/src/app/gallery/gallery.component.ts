import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../shared/services/auth.service';
import { RouterModule } from '@angular/router'; // Import RouterModule

interface Image {
  filename: string;
  url: string;
  userId: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements AfterViewInit {
  images: Image[] = [];
  selectedImage: Image | null = null;
  selectedFile: File | null = null;

  @ViewChild('canvas', { static: false }) canvas!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  private drawing = false;
  private tool: 'brush' | 'eraser' = 'brush';

  constructor(private http: HttpClient, private authService: AuthService) {}

  ngOnInit(): void {
    this.fetchImages();
  }

  ngAfterViewInit(): void {
    if (this.selectedImage) {
      this.initCanvas();
    }
  }

  fetchImages(): void {
    const headers = new HttpHeaders().set(
      'Authorization',
      this.authService.getToken() || ''
    );
    this.http
      .get<Image[]>('http://localhost:8000/api/images', { headers })
      .subscribe(
        (data: Image[]) => {
          this.images = data;
        },
        (error) => {
          console.error('Error fetching images:', error);
        }
      );
  }

  openImage(image: Image): void {
    this.selectedImage = image;
    setTimeout(() => this.initCanvas(), 0); // Ensure the canvas is initialized after the view updates
  }

  closeImage(): void {
    this.selectedImage = null;
  }

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
            this.fetchImages(); // Refresh the gallery
          },
          (error) => {
            console.error('Error renaming image:', error);
          }
        );
    }
  }

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
            this.fetchImages(); // Refresh the gallery
          },
          (error) => {
            console.error('Error deleting image:', error);
          }
        );
    }
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  onUpload(): void {
    if (!this.selectedFile) return;

    const headers = new HttpHeaders().set(
      'Authorization',
      this.authService.getToken() || ''
    );
    const formData = new FormData();
    formData.append('image', this.selectedFile);

    this.http
      .post('http://localhost:8000/api/upload', formData, { headers })
      .subscribe(
        () => {
          this.fetchImages(); // Refresh the gallery after upload
        },
        (error) => {
          console.error('Error uploading image:', error);
        }
      );
  }

  setBrush(): void {
    this.tool = 'brush';
  }

  setEraser(): void {
    this.tool = 'eraser';
  }

  applyTransparency(): void {
    if (!this.selectedImage) {
      console.error('No image selected for editing.');
      return;
    }
  
    const canvas = this.canvas.nativeElement;
  
    canvas.toBlob((blob) => {
      if (!blob) {
        console.error('Failed to generate blob from canvas.');
        return;
      }
  
      // Ensure selectedImage is not null before accessing filename
      const formData = new FormData();
      formData.append('image', blob, this.selectedImage?.filename || 'edited-image.png');
  
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
            this.fetchImages(); // Refresh the gallery after edit
          },
          (error) => {
            console.error('Error applying transparency:', error);
          }
        );
    }, 'image/png'); // Set output format to PNG
  }
  

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

  private startDrawing(event: MouseEvent): void {
    this.drawing = true;
    this.ctx.beginPath();
    this.ctx.moveTo(event.offsetX, event.offsetY);
  }

  private draw(event: MouseEvent): void {
    if (!this.drawing) return;

    this.ctx.lineTo(event.offsetX, event.offsetY);
    this.ctx.strokeStyle = this.tool === 'brush' ? 'black' : 'white';
    this.ctx.lineWidth = this.tool === 'brush' ? 5 : 10;
    this.ctx.stroke();
  }

  private stopDrawing(): void {
    this.drawing = false;
    this.ctx.closePath();
  }
}
