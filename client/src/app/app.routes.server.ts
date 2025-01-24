import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  // Domyślna obsługa wszystkich ścieżek za pomocą prerenderowania
  {
    path: '**',
    renderMode: RenderMode.Prerender, // Prerenderowanie wszystkich ścieżek
  }
];
