import { TestBed, async } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './shared/material.module';

import { NavbarHeaderComponent } from './components/navbar-header/navbar-header.component';
import { NavbarActionsComponent } from './components/navbar-actions/navbar-actions.component';
import { SubjectsSummaryComponent } from './components/subjects-summary/subjects-summary.component';

import { AppComponent } from './app.component';

import { SubjectSummaryService } from './services/subject-summary.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavbarHeaderComponent,
        NavbarActionsComponent,
        SubjectsSummaryComponent
      ],
      imports: [
        MaterialModule,
        BrowserAnimationsModule
      ],
      providers: [SubjectSummaryService]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have a span element`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('span').textContent).toBeTruthy();
  }));
});
