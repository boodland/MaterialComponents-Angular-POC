import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { TutorResolverService } from './tutor-resolver.service';
import { TutorService } from './tutor.service';


describe('TutorResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [
        TutorResolverService,
        TutorService
      ]
    });
  });

  it('should be created', inject([TutorResolverService], (service: TutorResolverService) => {
    expect(service).toBeTruthy();
  }));
});
