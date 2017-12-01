import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const tutorRoutes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(tutorRoutes)],
  exports: [RouterModule]
})
export class TutorRoutingModule { }
