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

  subjectList$: Observable<SubjectItem[]>;
  typeList = [
    { text: 'None', value: '' },
    { text: 'A', value: 'A' },
    { text: 'B', value: 'B' },
    { text: 'C', value: 'C' },
    { text: 'D', value: 'D' },
  ];

  constructor(private subjectService: SubjectService) { }

  ngOnInit() {
    this.getSubjects();
  }

  getSubjects() {
    this.subjectList$ = this.subjectService.getSubjects();
  }

  getFilteredSubjects(title: string, typeValue: string): Observable<SubjectItem[]> {
    return this.subjectList$
      .map(subjectList => subjectList
        .filter(subject => this.filterSubjectBy(subject, title, typeValue))
       );
  }

  filterSubjectBy(subject: SubjectItem, title: string, typeValue): boolean {
    let isValid = !title || subject.title.toLowerCase().includes(title.toLowerCase());

    isValid = isValid &&
      (!typeValue || subject.type === typeValue);

    return isValid;
  }
}
