import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './../shared/material.module';
import { AppRoutingModule } from './../shared/app-routing.module';

import { SubjectDetailsComponent } from './components/subject-details/subject-details.component';
import { SubjectService } from './services/subject.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SubjectDetailsComponent],
  exports: [SubjectDetailsComponent],
  providers: [SubjectService]
})
export class SubjectModule { }
