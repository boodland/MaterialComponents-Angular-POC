import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './../shared/material.module';
import { SubjectRoutingModule } from './subject-routing.module';

import { SubjectListComponent } from './components/subject-list/subject-list.component';
import { SubjectDetailsComponent } from './components/subject-details/subject-details.component';

import { SubjectService } from './services/subject.service';

@NgModule({
  imports: [
    CommonModule,
    SubjectRoutingModule
  ],
  declarations: [
    SubjectListComponent,
    SubjectDetailsComponent
  ],
  providers: [SubjectService]
})
export class SubjectModule { }
