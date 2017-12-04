import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { TutorService } from './tutor.service';
import { ITutorItem } from '../models/tutor-item.interface';

@Injectable()
export class TutorResolverService implements Resolve<ITutorItem[]> {

  constructor(private tutorService: TutorService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ITutorItem[]> {
    return this.tutorService.getTutors().map(tutors => {
      if (tutors) {
        return tutors;
      } else {
        this.router.navigate(['/dashboard']);
        return null;
      }
    });
  }

}
