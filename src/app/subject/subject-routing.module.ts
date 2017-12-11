import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SubjectListComponent } from './components/subject-list/subject-list.component';
import { SubjectDetailsComponent } from '../subject/components/subject-details/subject-details.component';

import { AppAuthGuardService } from '../app-auth-guard.service';

const subjectRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: SubjectListComponent, data: { state: 'subject-list' } },
      {
        path: ':id',
        component: SubjectDetailsComponent,
        data: { state: 'subject-details' },
        canActivateChild: [AppAuthGuardService],
        children: [
          { path: 'exams', data: { message: `subject's exams` } },
          { path: 'tutors', data: { message: `subject's tutors` } }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(subjectRoutes) ],
  exports: [ RouterModule ]
})
export class SubjectRoutingModule { }
