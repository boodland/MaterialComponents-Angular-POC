import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TutorListComponent } from './components/tutor-list/tutor-list.component';
import { TutorDetailsComponent } from './components/tutor-details/tutor-details.component';

import { TutorResolverService } from './services/tutor-resolver.service';
import { AppAuthGuardService } from '../app-auth-guard.service';

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
      },
      {
        path: ':id',
        component: TutorDetailsComponent,
        canActivate: [AppAuthGuardService],
        data: { state: 'tutor-details', message: 'tutor details' }
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
