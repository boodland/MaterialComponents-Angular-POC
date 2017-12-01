import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { TutorService } from '../../services/tutor.service';

import { ITutorItem } from '../../models/tutor-item.interface';

@Component({
  selector: 'app-tutor-list',
  templateUrl: './tutor-list.component.html',
  styleUrls: ['./tutor-list.component.scss']
})
export class TutorListComponent implements OnInit {

  tutorList$: Observable<ITutorItem[]>;

  constructor(private tutorService: TutorService) { }

  ngOnInit() {
    this.getTutors();
  }

  getTutors() {
    this.tutorList$ = this.tutorService.getTutors();
  }

}
