import { Component, OnInit } from '@angular/core';

import { SubjectSummaryService } from '../../services/subject-summary.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {

  subjectsSummary: any[];

  constructor(private subjectSummaryService: SubjectSummaryService) { }

  getSubjectsSummary() {
    this.subjectsSummary = this.subjectSummaryService.getSubjectsSummary();
  }

  ngOnInit() {
    this.getSubjectsSummary();
  }

}
