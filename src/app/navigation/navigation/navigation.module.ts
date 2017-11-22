import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MaterialModule } from '../../shared/material.module';
import { NavbarHeaderComponent } from './components/navbar-header/navbar-header.component';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [NavbarHeaderComponent],
  exports: [NavbarHeaderComponent]
})
export class NavigationModule { }
