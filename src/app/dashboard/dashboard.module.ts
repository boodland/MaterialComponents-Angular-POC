import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppMaterialModule } from './../app-material.module';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardListComponent } from './components/dashboard-list/dashboard-list.component';

import { DashboardService } from './services/dashboard.service';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
    DashboardRoutingModule
  ],
  declarations: [DashboardListComponent],
  providers: [DashboardService]
})
export class DashboardModule { }
