import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';

import { MaterialModule } from '../../../shared/material.module';
import { AppRoutingModule } from '../../../app-routing.module';

import { SubjectDetailsComponent } from './subject-details.component';

describe('SubjectDetailsComponent', () => {
  let component: SubjectDetailsComponent;
  let fixture: ComponentFixture<SubjectDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        AppRoutingModule
      ],
      declarations: [ SubjectDetailsComponent ],
      providers: [ { provide: APP_BASE_HREF, useValue: '/' } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
