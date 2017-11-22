import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialModule } from '../../../shared/material.module';

import { SubjectsSummaryComponent } from './subjects-summary.component';

import { SubjectSummaryService } from '../../services/subject-summary.service';

import { AppRoutingModule } from '../../../shared/app-routing.module';

import { SubjectDetailsComponent } from '../../../components/subject-details/subject-details.component';

import { APP_BASE_HREF } from '@angular/common';

describe('SubjectsComponent', () => {
  let component: SubjectsSummaryComponent;
  let fixture: ComponentFixture<SubjectsSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectsSummaryComponent, SubjectDetailsComponent ],
      imports: [ MaterialModule, AppRoutingModule ],
      providers: [SubjectSummaryService, { provide: APP_BASE_HREF, useValue: '/' }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
