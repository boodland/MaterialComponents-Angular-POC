import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppMaterialModule } from './../app-material.module';
import { TutorRoutingModule } from './tutor-routing.module';

import { TutorListComponent } from './components/tutor-list/tutor-list.component';
import { TutorDetailsComponent } from './components/tutor-details/tutor-details.component';

import { TutorService } from './services/tutor.service';
import { TutorResolverService } from './services/tutor-resolver.service';
import { AppAuthGuardService } from '../app-auth-guard.service';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
    TutorRoutingModule
  ],
  declarations: [
    TutorListComponent,
    TutorDetailsComponent
  ],
  providers: [
    TutorService,
    TutorResolverService,
    AppAuthGuardService
  ]
})
export class TutorModule { }
