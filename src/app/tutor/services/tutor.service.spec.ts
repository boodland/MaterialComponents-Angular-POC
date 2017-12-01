import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { TutorService } from './tutor.service';

describe('TutorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [TutorService]
    });
  });

  it('should be created', inject([TutorService], (service: TutorService) => {
    expect(service).toBeTruthy();
  }));
});
