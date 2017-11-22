import { Component, Output, OnInit, EventEmitter } from '@angular/core';

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

  @Output() actionClickEvent: EventEmitter<string> = new EventEmitter();

  constructor() { }

  actionClick() {
    this.actionClickEvent.emit();
  }

  ngOnInit() {
  }

}
