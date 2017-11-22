import { Component, OnInit } from '@angular/core';

import { DashboardItem } from '../../models/dashboard-item';

import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-dashboard-list',
  templateUrl: './dashboard-list.component.html',
  styleUrls: ['./dashboard-list.component.scss']
})
export class DashboardListComponent implements OnInit {

  dashboardList: DashboardItem[];

  constructor(private subjectSummaryService: DashboardService) { }

  getDashboard() {
    this.subjectSummaryService.getDashboard()
      .subscribe(dashboardList => this.dashboardList = dashboardList);
  }

  ngOnInit() {
    this.getDashboard();
  }

}
