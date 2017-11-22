import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialModule } from '../../../shared/material.module';

import { DashboardListComponent } from './dashboard-list.component';

import { DashboardService } from '../../services/dashboard.service';

import { AppRoutingModule } from '../../../shared/app-routing.module';

import { SubjectModule } from '../../../subject/subject.module';

import { APP_BASE_HREF } from '@angular/common';

describe('DashboardListComponent', () => {
  let component: DashboardListComponent;
  let fixture: ComponentFixture<DashboardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardListComponent ],
      imports: [ MaterialModule, AppRoutingModule, SubjectModule ],
      providers: [DashboardService, { provide: APP_BASE_HREF, useValue: '/' }]
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
