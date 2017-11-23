import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './../shared/material.module';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardListComponent } from './components/dashboard-list/dashboard-list.component';

import { DashboardService } from './services/dashboard.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    DashboardRoutingModule
  ],
  declarations: [DashboardListComponent],
  providers: [DashboardService]
})
export class DashboardModule { }
