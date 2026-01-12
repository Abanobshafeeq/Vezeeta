import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { register } from 'swiper/element/bundle';

if (typeof window !== 'undefined') {
  // @ts-ignore
  import('web-animations-js');
  register();
}

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));