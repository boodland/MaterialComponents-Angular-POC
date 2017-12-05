import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppMaterialModule } from './../app-material.module';

import { LoaderProgressBarComponent } from './components/loader-progress-bar/loader-progress-bar.component';

import { LoaderInterceptor } from './interceptors/loader.interceptor';

import { LoaderService } from './services/loader.service';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  declarations: [LoaderProgressBarComponent],
  providers: [
    LoaderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
    }
  ],
  exports: [LoaderProgressBarComponent]
})
export class LoaderModule { }
