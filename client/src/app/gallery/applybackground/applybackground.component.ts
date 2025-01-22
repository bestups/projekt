import { Component, ElementRef, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-applybackground',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './applybackground.component.html',
  styleUrls: ['./applybackground.component.css'],
})
export class ApplybackgroundComponent implements OnInit, AfterViewInit {
  @ViewChild('canvas', { static: false }) canvas!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;

  receivedImage: string | null = null;
  imageFilename: string | null = null;
  token: string | null = null;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  availableBackgrounds: string[] = []; // Lista dostępnych teł
  selectedBackground: string | null = null; // Wybrane tło

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.receivedImage = params['image'];
      this.imageFilename = params['filename'];
      this.token = params['token'];
  
      if (!this.receivedImage) {
        console.error('Nie odebrano obrazu (receivedImage jest null lub undefined).');
      } else {
        console.log('Odebrany obraz:');
        console.log('Nazwa pliku:', this.imageFilename);
        console.log('Token:', this.token);
      }
    });
  
    this.loadBackgrounds(); // Pobierz listę teł z serwera
  }
  
  loadBackgrounds(): void {
    this.http.get<string[]>('http://localhost:8000/api/backgrounds').subscribe(
      (backgrounds) => {
        this.availableBackgrounds = backgrounds.map((bg) => `http://localhost:8000/uploads/background/${bg}`);
      },
      (error) => {
        console.error('Błąd podczas ładowania listy teł:', error);
      }
    );
  }

  ngAfterViewInit(): void {
    if (this.receivedImage) {
      this.drawImageOnCanvas();
    }
  }

  drawImageOnCanvas(): void {
    if (!this.receivedImage) return;

    const canvas = this.canvas.nativeElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error('Brak kontekstu płótna');
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
      console.log('Obraz narysowany na płótnie.');
    };

    img.onerror = () => {
      console.error('Błąd podczas ładowania obrazu.');
    };
  }

  onSave(): void {
    if (!this.imageFilename || !this.token) {
      console.error('Nie można zapisać obrazu - brakuje wymaganych danych.');
      return;
    }
  
    const canvas = this.canvas.nativeElement;
  
    // Przekształć zawartość płótna na dane w formacie Base64
    const imageData = canvas.toDataURL('image/png');
  
    // Zamień Base64 na Blob
    const blob = this.base64ToBlob(imageData);
  
    // Przygotuj dane do wysłania
    const headers = new HttpHeaders().set('Authorization', this.token || '');
    const formData = new FormData();
    formData.append('image', blob, this.imageFilename); // Użycie oryginalnej nazwy pliku
  
    // Wyślij dane na serwer
    this.http
      .post('http://localhost:8000/api/save-image-with-background', formData, { headers })
      .subscribe(
        () => {
          console.log('Obraz zapisany pomyślnie.');
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

  applyBackground(backgroundUrl: string): void {
    if (!this.receivedImage) return;
  
    const canvas = this.canvas.nativeElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error('Brak kontekstu płótna');
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
        // Ustaw wymiary płótna na wymiary zdjęcia użytkownika
        canvas.width = userImage.width;
        canvas.height = userImage.height;
  
        // Oblicz proporcje tła
        const bgAspectRatio = background.width / background.height;
        const userAspectRatio = userImage.width / userImage.height;
  
        let bgWidth, bgHeight, bgX, bgY;
  
        if (userAspectRatio > bgAspectRatio) {
          // Dopasowanie tła do szerokości zdjęcia
          bgWidth = userImage.width;
          bgHeight = userImage.width / bgAspectRatio;
          bgX = 0;
          bgY = (userImage.height - bgHeight) / 2;
        } else {
          // Dopasowanie tła do wysokości zdjęcia
          bgHeight = userImage.height;
          bgWidth = userImage.height * bgAspectRatio;
          bgX = (userImage.width - bgWidth) / 2;
          bgY = 0;
        }
  
        // Rysowanie tła z dopasowaniem
        ctx.drawImage(background, bgX, bgY, bgWidth, bgHeight);
  
        // Rysowanie zdjęcia użytkownika z przezroczystym tłem
        ctx.drawImage(userImage, 0, 0, userImage.width, userImage.height);
  
        console.log('Tło zostało zastosowane do obrazu.');
      };
    };
  
    background.onerror = () => {
      console.error('Błąd podczas ładowania tła.');
    };
  }
}  