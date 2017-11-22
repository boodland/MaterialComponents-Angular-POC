import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './shared/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { NavbarActionsComponent } from './components/navbar-actions/navbar-actions.component';
import { SubjectsSummaryComponent } from './components/subjects-summary/subjects-summary.component';
import { SubjectSummaryService } from './services/subject-summary.service';
import { AppRoutingModule } from './shared/app-routing.module';
import { SubjectDetailsComponent } from './components/subject-details/subject-details.component';
import { SubjectService } from './services/subject.service';
import { NavigationModule } from './navigation/navigation/navigation.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarActionsComponent,
    SubjectsSummaryComponent,
    SubjectDetailsComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NavigationModule
  ],
  providers: [SubjectSummaryService, SubjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
