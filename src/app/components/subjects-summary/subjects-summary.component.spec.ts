import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialModule } from '../../shared/material.module';

import { SubjectsSummaryComponent } from './subjects-summary.component';

import { SubjectSummaryService } from '../../services/subject-summary.service';

describe('SubjectsComponent', () => {
  let component: SubjectsSummaryComponent;
  let fixture: ComponentFixture<SubjectsSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectsSummaryComponent ],
      imports: [ MaterialModule ],
      providers: [SubjectSummaryService]
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
