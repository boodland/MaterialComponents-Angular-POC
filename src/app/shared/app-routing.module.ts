import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SubjectsSummaryComponent } from '../components/subjects-summary/subjects-summary.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: SubjectsSummaryComponent },
  { path: '**', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
