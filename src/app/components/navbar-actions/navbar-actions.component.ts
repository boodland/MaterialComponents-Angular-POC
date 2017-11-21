import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-actions',
  templateUrl: './navbar-actions.component.html',
  styleUrls: ['./navbar-actions.component.scss']
})
export class NavbarActionsComponent implements OnInit {

  actions: any[] = [
    { title: 'Dashboard', icon: 'apps' },
    { title: 'Subjects', icon: 'school' },
    { title: 'Tests', icon: 'edit' },
    { title: 'Tutors', icon: 'person' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
