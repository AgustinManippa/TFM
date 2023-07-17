import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// Inicialización de la aplicación Angular mediante el módulo raíz AppModule
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));