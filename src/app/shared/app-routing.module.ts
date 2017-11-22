import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardListComponent } from '../dashboard/components/dashboard-list/dashboard-list.component';
import { SubjectDetailsComponent } from '../components/subject-details/subject-details.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardListComponent },
  { path: 'subjects/:id', component: SubjectDetailsComponent },
  { path: '**', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
