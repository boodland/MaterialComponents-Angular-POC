import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SubjectComponent } from './subject.component';
import { SubjectListComponent } from './components/subject-list/subject-list.component';
import { SubjectDetailsComponent } from '../subject/components/subject-details/subject-details.component';

const subjectRoutes: Routes = [
  {
    path: 'subjects', component: SubjectComponent,
    children: [
      { path: '', component: SubjectListComponent, data: { state: 'subjects-list' } },
      { path: ':id', component: SubjectDetailsComponent, data: { state : 'subject-details'}  }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(subjectRoutes) ],
  exports: [ RouterModule ]
})
export class SubjectRoutingModule { }
