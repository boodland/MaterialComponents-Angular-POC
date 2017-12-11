import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamRoutingModule } from './exam-routing.module';

import { ExamListComponent } from './components/exam-list/exam-list.component';

import { AppAuthGuardService } from '../app-auth-guard.service';

@NgModule({
  imports: [
    CommonModule,
    ExamRoutingModule
  ],
  declarations: [ExamListComponent],
  providers: [AppAuthGuardService]
})
export class ExamModule { }
