import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';

import { AppMaterialModule } from '../../../app-material.module';
import { DashboardRoutingModule } from '../../dashboard-routing.module';
import { AppRoutingModule } from '../../../app-routing.module';

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
