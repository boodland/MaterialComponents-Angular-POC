import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SubjectListComponent } from './components/subject-list/subject-list.component';
import { SubjectDetailsComponent } from '../subject/components/subject-details/subject-details.component';

const subjectRoutes: Routes = [
  { path: 'subjects', component: SubjectListComponent, data: { state: 'subjects' } },
  { path: 'subject/:id', component: SubjectDetailsComponent, data: { state : 'subject-details'}  }
];

@NgModule({
  imports: [ RouterModule.forChild(subjectRoutes) ],
  exports: [ RouterModule ]
})
export class SubjectRoutingModule { }
