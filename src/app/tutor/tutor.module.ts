import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppMaterialModule } from './../app-material.module';
import { TutorRoutingModule } from './tutor-routing.module';

import { TutorListComponent } from './components/tutor-list/tutor-list.component';

import { TutorService } from './services/tutor.service';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
    TutorRoutingModule
  ],
  declarations: [TutorListComponent],
  providers: [TutorService]
})
export class TutorModule { }
