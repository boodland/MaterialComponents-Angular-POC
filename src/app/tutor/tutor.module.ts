import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppMaterialModule } from './../app-material.module';
import { TutorRoutingModule } from './tutor-routing.module';
import { TutorService } from './services/tutor.service';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
    TutorRoutingModule
  ],
  declarations: [],
  providers: [TutorService]
})
export class TutorModule { }
