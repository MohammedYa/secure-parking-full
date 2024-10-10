import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withEnabledBlockingInitialNavigation, withHashLocation, withInMemoryScrolling, withRouterConfig, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

export const appConfig: ApplicationConfig = {
  providers: [ provideRouter(routes,
    withRouterConfig({
      onSameUrlNavigation: 'reload'
    }),
    withInMemoryScrolling({
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled'
    }),
    withEnabledBlockingInitialNavigation(),
    withViewTransitions(),
    withHashLocation()
  ),
    provideHttpClient(),importProvidersFrom(),ReactiveFormsModule],
};
