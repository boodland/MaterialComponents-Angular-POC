import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './shared/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './shared/app-routing.module';
import { SubjectDetailsComponent } from './components/subject-details/subject-details.component';
import { SubjectService } from './services/subject.service';
import { NavigationModule } from './navigation/navigation.module';
import { DashboardModule } from './dashboard/dashboard.module';


@NgModule({
  declarations: [
    AppComponent,
    SubjectDetailsComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NavigationModule,
    DashboardModule
  ],
  providers: [SubjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
