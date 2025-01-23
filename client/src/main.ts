import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { LoginComponent } from './app/auth/login/login.component';
import { GalleryComponent } from './app/gallery/gallery.component';
import { EditComponent } from './app/gallery/edit/edit.component';
import { ApplybackgroundComponent } from './app/gallery/applybackground/applybackground.component';
import { RegisterComponent } from './app/auth/register/register.component';
import { APP_BASE_HREF } from '@angular/common';

/**
 * Application routes configuration.
 * Defines the routes used in the application and the corresponding components.
 */
const routes: Routes = [
  /**
   * Route for the login page.
   * URL: `/login`
   * Component: `LoginComponent`
   */
  { path: 'login', component: LoginComponent },

  /**
   * Default route (root).
   * Redirects to the login page (`/login`).
   */
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  /**
   * Route for the gallery page.
   * URL: `/gallery`
   * Component: `GalleryComponent`
   */
  { path: 'gallery', component: GalleryComponent },

  /**
   * Route for the edit page.
   * URL: `/edit`
   * Component: `EditComponent`
   */
  { path: 'edit', component: EditComponent },

  /**
   * Route for the apply background page.
   * URL: `/applybackground`
   * Component: `ApplybackgroundComponent`
   */
  { path: 'applybackground', component: ApplybackgroundComponent },

  /**
   * Route for the registration page.
   * URL: `/register`
   * Component: `RegisterComponent`
   */
  { path: 'register', component: RegisterComponent },
];

/**
 * Bootstrap the Angular application.
 * This initializes the application with the root component `AppComponent` and provides necessary services.
 */
bootstrapApplication(AppComponent, {
  providers: [
    /**
     * Provides router configuration for the application.
     */
    provideRouter(routes),

    /**
     * Provides HTTP client for making HTTP requests.
     */
    provideHttpClient(),

    /**
     * Sets the base href for the application.
     * Default value is `/`.
     */
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
}).catch((err) => console.error(err));
