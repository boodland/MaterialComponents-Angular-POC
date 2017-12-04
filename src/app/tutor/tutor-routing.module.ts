import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TutorListComponent } from './components/tutor-list/tutor-list.component';
import { TutorResolverService } from './services/tutor-resolver.service';

const tutorRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: TutorListComponent,
        data: { state: 'tutor-list' },
        resolve: {
          tutors: TutorResolverService
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(tutorRoutes)],
  exports: [RouterModule],
  providers: [TutorResolverService]
})
export class TutorRoutingModule { }
