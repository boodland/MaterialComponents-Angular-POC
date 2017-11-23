import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialModule } from '../../../shared/material.module';
import { AppRoutingModule } from '../../../app-routing.module';

import { NavbarActionsComponent } from './navbar-actions.component';

import { APP_BASE_HREF } from '@angular/common';

describe('NavbarActionsComponent', () => {
  let component: NavbarActionsComponent;
  let fixture: ComponentFixture<NavbarActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        AppRoutingModule
      ],
      declarations: [ NavbarActionsComponent ],
      providers: [ { provide: APP_BASE_HREF, useValue: '/' } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
