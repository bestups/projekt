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

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'gallery', component: GalleryComponent },
  { path: 'edit', component: EditComponent },
  { path: 'applybackground', component: ApplybackgroundComponent },
  { path: 'register', component: RegisterComponent },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
}).catch((err) => console.error(err));
