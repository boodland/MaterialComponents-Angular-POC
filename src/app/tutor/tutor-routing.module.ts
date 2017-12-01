import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TutorListComponent } from './components/tutor-list/tutor-list.component';

const tutorRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: TutorListComponent, data: { state: 'tutor-list' } }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(tutorRoutes)],
  exports: [RouterModule]
})
export class TutorRoutingModule { }
