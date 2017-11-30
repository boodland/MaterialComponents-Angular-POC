import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { SubjectService } from '../../services/subject.service';

import { SubjectItem } from '../../models/subject-item';

@Component({
  selector: 'app-subject-details',
  templateUrl: './subject-details.component.html',
  styleUrls: ['./subject-details.component.scss']
})
export class SubjectDetailsComponent implements OnInit {

  selectedSubjectId: number;
  selectedSubject$: Observable<SubjectItem>;

  constructor(
    private route: ActivatedRoute,
    private subjectService: SubjectService
  ) { }

  ngOnInit() {
    this.selectedSubjectId = +this.route.snapshot.paramMap.get('id');
    this.getSubject();
  }

  getSubject(): any {
    this.selectedSubject$ = this.subjectService.getSubject(this.selectedSubjectId);
  }

}
