import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './../shared/material.module';
import { AppRoutingModule } from './../shared/app-routing.module';

import { SubjectsSummaryComponent } from './components/subjects-summary/subjects-summary.component';
import { SubjectSummaryService } from './services/subject-summary.service';

@NgModule({
  imports: [CommonModule, MaterialModule, AppRoutingModule],
  declarations: [SubjectsSummaryComponent],
  exports: [SubjectsSummaryComponent],
  providers: [SubjectSummaryService]
})
export class DashboardModule { }
