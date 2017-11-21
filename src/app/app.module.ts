import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './shared/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { NavbarHeaderComponent } from './components/navbar-header/navbar-header.component';
import { NavbarActionsComponent } from './components/navbar-actions/navbar-actions.component';
import { SubjectsSummaryComponent } from './components/subjects-summary/subjects-summary.component';
import { SubjectSummaryService } from './services/subject-summary.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarHeaderComponent,
    NavbarActionsComponent,
    SubjectsSummaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [SubjectSummaryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
