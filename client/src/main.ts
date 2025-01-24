import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { LoginComponent } from './app/auth/login/login.component';
import { GalleryComponent } from './app/gallery/gallery.component';
import { EditComponent } from './app/gallery/edit/edit.component';
import { ApplybackgroundComponent } from './app/gallery/applybackground/applybackground.component';
import { RegisterComponent } from './app/auth/register/register.component';
import { APP_BASE_HREF, isPlatformServer } from '@angular/common';
import { PLATFORM_ID, inject } from '@angular/core';

// Sprawdzenie środowiska (produkcja/deweloperskie)
const baseHref = typeof window !== 'undefined'
  ? document.getElementsByTagName('base')[0]?.getAttribute('href') || '/'
  : '/';

/**
 * Application routes configuration.
 * Defines the routes used in the application and the corresponding components.
 */
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'gallery', component: GalleryComponent },
  { path: 'edit', component: EditComponent },
  { path: 'applybackground', component: ApplybackgroundComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }, // Obsługa błędnych ścieżek
];

/**
 * Bootstrap the Angular application.
 */
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    { provide: APP_BASE_HREF, useValue: baseHref }, // Użycie dynamicznego baseHref
    { provide: PLATFORM_ID, useFactory: () => (typeof window === 'undefined' ? 'server' : 'browser') }, // Rozróżnienie SSR i przeglądarki
  ],
}).catch((err) => console.error(err));
