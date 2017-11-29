import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { SubjectService } from '../../services/subject.service';

import { SubjectItem } from '../../models/subject-item';

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

  getFilteredSubjects(title: string): Observable<SubjectItem[]> {
    let filteredSubjects = this.subjectList;
    if (title) {
     filteredSubjects = this.subjectList
      .map(subjectList =>
        subjectList.filter(subjectItem =>
          subjectItem.title.toLowerCase().includes(title.toLowerCase())
        )
       );
    }
    return filteredSubjects;
  }
}
