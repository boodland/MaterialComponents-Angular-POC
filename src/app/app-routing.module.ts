import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DialogMessageComponent } from './dialog/components/dialog-message/dialog-message.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'subjects', loadChildren: 'app/subject/subject.module#SubjectModule' },
  { path: 'tutors', loadChildren: 'app/tutor/tutor.module#TutorModule' },
  { path: 'dialog', component: DialogMessageComponent, outlet: 'dialog' },
  { path: '**', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
