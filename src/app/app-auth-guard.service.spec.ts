import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppAuthGuardService } from './app-auth-guard.service';

describe('AppAuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [AppAuthGuardService]
    });
  });

  it('should be created', inject([AppAuthGuardService], (service: AppAuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});
