import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppMaterialModule } from './../app-material.module';

import { NavbarHeaderComponent } from './components/navbar-header/navbar-header.component';
import { NavbarActionsComponent } from './components/navbar-actions/navbar-actions.component';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
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
