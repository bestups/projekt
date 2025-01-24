import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express, { Request, Response, NextFunction } from 'express';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

// Ścieżki do folderów z plikami serwera i przeglądarki
const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = resolve(serverDistFolder, '../browser');

const app = express();
const angularApp = new AngularNodeAppEngine();

// Przykładowe API
app.get('/api/example', (req: Request, res: Response) => {
  res.json({ message: 'Example API response' });
});

// Serwowanie plików statycznych z folderu przeglądarki
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  })
);

// Obsługa Angular Universal dla wszystkich innych ścieżek
app.use('/**', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await angularApp.handle(req);
    if (response) {
      writeResponseToNodeResponse(response, res);
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
});

// Middleware do obsługi błędów
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error('Error during request:', err);
  res.status(500).send('Internal Server Error');
});

// Uruchamianie serwera
const port = process.env['PORT'] || 4000; // Definicja zmiennej port
if (isMainModule(import.meta.url)) {
  app.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

// Eksport dla Angular CLI
export const reqHandler = createNodeRequestHandler(app);
