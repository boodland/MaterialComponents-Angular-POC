import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SubjectDetailsComponent } from '../subject/components/subject-details/subject-details.component';


const subjectRoutes: Routes = [
  { path: 'subject/:id', component: SubjectDetailsComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(subjectRoutes) ],
  exports: [ RouterModule ]
})
export class SubjectRoutingModule { }
