import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { sidebarReducer } from './reducers/sidebar.reducer';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import  {NgApexchartsModule} from 'ng-apexcharts'
export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes),
      provideStore({sidebar:sidebarReducer}),
      provideAnimationsAsync(),
      NgApexchartsModule
    ]
};
