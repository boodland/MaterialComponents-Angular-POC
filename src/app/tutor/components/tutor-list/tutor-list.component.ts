import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';

import { ITutorItem } from '../../models/tutor-item.interface';

@Component({
  selector: 'app-tutor-list',
  templateUrl: './tutor-list.component.html',
  styleUrls: ['./tutor-list.component.scss']
})
export class TutorListComponent implements OnInit {

  tutorList$: Observable<ITutorItem[]>;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getTutors();
  }

  getTutors() {
    this.tutorList$ = this.route.data.map(data => data.tutors);
  }

  getRatingStars(rating: number): string[] {
    const stars = Array(rating).fill('star');
    const emptyStars = Array(5 - rating).fill('star_border');
    return stars.concat(emptyStars);
  }

  contact(event) {
    event.preventDefault();
    event.stopPropagation();
    this.router.navigate([{ outlets: { dialog: ['dialog'] } }], { skipLocationChange: true });
 }

}
