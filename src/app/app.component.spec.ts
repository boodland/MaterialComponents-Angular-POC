import { TestBed, async } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './shared/material.module';
import { NavigationModule } from './navigation/navigation.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { APP_BASE_HREF } from '@angular/common';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        MaterialModule,
        NavigationModule,
        AppRoutingModule
      ],
      declarations: [ AppComponent ],
      providers: [ { provide: APP_BASE_HREF, useValue: '/' } ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
