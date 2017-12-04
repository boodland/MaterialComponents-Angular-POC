import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { APP_BASE_HREF } from '@angular/common';

import { AppMaterialModule } from '../../../app-material.module';
import { DashboardRoutingModule } from '../../dashboard-routing.module';

import { DashboardListComponent } from './dashboard-list.component';

import { DashboardService } from '../../services/dashboard.service';

describe('DashboardListComponent', () => {
  let component: DashboardListComponent;
  let fixture: ComponentFixture<DashboardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppMaterialModule,
        DashboardRoutingModule,
        RouterTestingModule
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
