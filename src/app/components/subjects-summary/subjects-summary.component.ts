import { Component, OnInit } from '@angular/core';

import { SubjectSummary } from '../../models/subject-summary';

import { SubjectSummaryService } from '../../services/subject-summary.service';

@Component({
  selector: 'app-subjects-summary',
  templateUrl: './subjects-summary.component.html',
  styleUrls: ['./subjects-summary.component.scss']
})
export class SubjectsSummaryComponent implements OnInit {

  subjectsSummary: SubjectSummary[];

  constructor(private subjectSummaryService: SubjectSummaryService) { }

  getSubjectsSummary() {
    this.subjectSummaryService.getSubjectsSummary()
      .subscribe(subjectsSummary => this.subjectsSummary = subjectsSummary);
  }

  ngOnInit() {
    this.getSubjectsSummary();
  }

}
