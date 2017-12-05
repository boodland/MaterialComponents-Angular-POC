import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppMaterialModule } from './app-material.module';
import { LoaderModule } from './loader/loader.module';
import { DialogModule } from './dialog/dialog.module';
import { NavigationModule } from './navigation/navigation.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppMaterialModule,
    LoaderModule,
    DialogModule,
    NavigationModule,
    DashboardModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
