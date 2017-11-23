import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialModule } from '../../../shared/material.module';
import { DashboardRoutingModule } from '../../dashboard-routing.module';
import { AppRoutingModule } from '../../../app-routing.module';

import { DashboardListComponent } from './dashboard-list.component';

import { DashboardService } from '../../services/dashboard.service';

import { APP_BASE_HREF } from '@angular/common';

describe('DashboardListComponent', () => {
  let component: DashboardListComponent;
  let fixture: ComponentFixture<DashboardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        DashboardRoutingModule,
        AppRoutingModule
      ],
      declarations: [ DashboardListComponent ],
      providers: [
        DashboardService,
        { provide: APP_BASE_HREF, useValue: '/' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
