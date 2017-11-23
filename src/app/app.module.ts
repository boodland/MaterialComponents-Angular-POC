import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './shared/material.module';
import { NavigationModule } from './navigation/navigation.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { SubjectModule } from './subject/subject.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    NavigationModule,
    DashboardModule,
    SubjectModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
