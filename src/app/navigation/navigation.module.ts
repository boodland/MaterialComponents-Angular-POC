import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './../shared/material.module';

import { NavbarHeaderComponent } from './components/navbar-header/navbar-header.component';
import { NavbarActionsComponent } from './components/navbar-actions/navbar-actions.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  declarations: [
    NavbarHeaderComponent,
    NavbarActionsComponent
  ],
  exports: [
    NavbarHeaderComponent,
    NavbarActionsComponent
  ]
})
export class NavigationModule { }
