import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppMaterialModule } from './../app-material.module';
import { TutorRoutingModule } from './tutor-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
    TutorRoutingModule
  ],
  declarations: []
})
export class TutorModule { }
