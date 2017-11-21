import { Component, OnInit } from '@angular/core';

import { SubjectSummaryService } from '../../services/subject-summary.service';

@Component({
  selector: 'app-subjects-summary',
  templateUrl: './subjects-summary.component.html',
  styleUrls: ['./subjects-summary.component.scss']
})
export class SubjectsSummaryComponent implements OnInit {

  subjectsSummary: any[];

  constructor(private subjectSummaryService: SubjectSummaryService) { }

  getSubjectsSummary() {
    this.subjectsSummary = this.subjectSummaryService.getSubjectsSummary();
  }

  ngOnInit() {
    this.getSubjectsSummary();
  }

}
