import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server'; // Zakładam, że masz plik z konfiguracją dla serwera
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';

// Włączanie trybu produkcyjnego, jeśli środowisko to produkcja
if (environment.production) {
  enableProdMode();
}

// Funkcja bootstrapowania aplikacji na serwerze
const bootstrap = () => bootstrapApplication(AppComponent, config);

// Eksport funkcji bootstrap jako domyślnego eksportu
export default bootstrap;
