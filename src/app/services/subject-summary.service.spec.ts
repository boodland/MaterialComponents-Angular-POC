import { TestBed, inject } from '@angular/core/testing';

import { SubjectSummaryService } from './subject-summary.service';

describe('SubjectSummaryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubjectSummaryService]
    });
  });

  it('should be created', inject([SubjectSummaryService], (service: SubjectSummaryService) => {
    expect(service).toBeTruthy();
  }));
});
