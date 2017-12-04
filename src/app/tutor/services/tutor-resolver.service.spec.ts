import { TestBed, inject } from '@angular/core/testing';

import { TutorResolverService } from './tutor-resolver.service';

describe('TutorResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TutorResolverService]
    });
  });

  it('should be created', inject([TutorResolverService], (service: TutorResolverService) => {
    expect(service).toBeTruthy();
  }));
});
