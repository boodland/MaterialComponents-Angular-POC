import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialModule } from '../../../shared/material.module';

import { AppRoutingModule } from '../../../shared/app-routing.module';
import { DashboardModule } from '../../../dashboard/dashboard.module';

import { NavbarActionsComponent } from './navbar-actions.component';
import { SubjectModule } from '../../../subject/subject.module';

import { APP_BASE_HREF } from '@angular/common';

describe('NavbarActionsComponent', () => {
  let component: NavbarActionsComponent;
  let fixture: ComponentFixture<NavbarActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarActionsComponent ],
      imports: [ MaterialModule, AppRoutingModule, DashboardModule, SubjectModule ],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
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
