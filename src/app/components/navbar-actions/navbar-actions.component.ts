import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-actions',
  templateUrl: './navbar-actions.component.html',
  styleUrls: ['./navbar-actions.component.scss']
})
export class NavbarActionsComponent implements OnInit {

  actions: any[] = [
    { title: 'Dashboard', link: '/dashboard', icon: 'apps' },
    { title: 'Subjects', link: '/subjects', icon: 'school' },
    { title: 'Tests', link: '/tests', icon: 'edit' },
    { title: 'Tutors', link: '/tutors', icon: 'person' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
