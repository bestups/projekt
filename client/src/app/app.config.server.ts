import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { provideServerRoutesConfig } from '@angular/ssr';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';
import { APP_BASE_HREF } from '@angular/common';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideServerRoutesConfig(serverRoutes),
    { provide: APP_BASE_HREF, useValue: '/' }, // Dynamiczne baseHref dla serwera
    {
      provide: 'SERVER_LOGGING',
      useValue: true, // Debugowanie na serwerze (zmień na false w produkcji)
    },
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
