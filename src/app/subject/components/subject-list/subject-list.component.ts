import { Component, OnInit } from '@angular/core';

import { SubjectService } from '../../services/subject.service';

import { SubjectItem } from '../../models/subject-item';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.scss']
})
export class SubjectListComponent implements OnInit {

  subjectList: Observable<SubjectItem[]>;

  constructor(private subjectService: SubjectService) { }

  ngOnInit() {
    this.getSubjects();
  }

  getSubjects() {
    this.subjectList = this.subjectService.getSubjects();
  }
}
