import { Component, OnInit } from '@angular/core';

import { DashboardItem } from '../../models/dashboard-item';

import { DashboardService } from '../../services/dashboard.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-dashboard-list',
  templateUrl: './dashboard-list.component.html',
  styleUrls: ['./dashboard-list.component.scss']
})
export class DashboardListComponent implements OnInit {

  dashboardList: Observable<DashboardItem[]>;

  constructor(private subjectSummaryService: DashboardService) { }

  getDashboard() {
    this.dashboardList = this.subjectSummaryService.getDashboard();
  }

  ngOnInit() {
    this.getDashboard();
  }

}
