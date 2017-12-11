import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppAuthGuardService } from '../app-auth-guard.service';

import { ExamListComponent } from './components/exam-list/exam-list.component';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [AppAuthGuardService],
    children: [
      {
        path: '',
        component: ExamListComponent,
        data: { state: 'exam-list', message: 'exams list' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamRoutingModule { }
