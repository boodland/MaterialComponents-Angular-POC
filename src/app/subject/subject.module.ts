import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppMaterialModule } from './../app-material.module';
import { SubjectRoutingModule } from './subject-routing.module';

import { SubjectListComponent } from './components/subject-list/subject-list.component';
import { SubjectDetailsComponent } from './components/subject-details/subject-details.component';

import { SubjectService } from './services/subject.service';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
    SubjectRoutingModule
  ],
  declarations: [
    SubjectListComponent,
    SubjectDetailsComponent
  ],
  providers: [SubjectService]
})
export class SubjectModule { }
