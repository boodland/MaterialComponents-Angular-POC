import { Component, OnInit } from '@angular/core';

import { DashboardItem } from '../../models/dashboard-item';

import { SubjectSummaryService } from '../../services/subject-summary.service';

@Component({
  selector: 'app-dashboard-list',
  templateUrl: './dashboard-list.component.html',
  styleUrls: ['./dashboard-list.component.scss']
})
export class DashboardListComponent implements OnInit {

  dashboardList: DashboardItem[];

  constructor(private subjectSummaryService: SubjectSummaryService) { }

  getSubjectsSummary() {
    this.subjectSummaryService.getSubjectsSummary()
      .subscribe(subjectsSummary => this.dashboardList = subjectsSummary);
  }

  ngOnInit() {
    this.getSubjectsSummary();
  }

}
