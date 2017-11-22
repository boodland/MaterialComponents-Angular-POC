import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './../shared/material.module';
import { AppRoutingModule } from './../shared/app-routing.module';

import { DashboardListComponent } from './components/dashboard-list/dashboard-list.component';
import { DashboardService } from './services/dashboard.service';

@NgModule({
  imports: [CommonModule, MaterialModule, AppRoutingModule],
  declarations: [DashboardListComponent],
  exports: [DashboardListComponent],
  providers: [DashboardService]
})
export class DashboardModule { }
