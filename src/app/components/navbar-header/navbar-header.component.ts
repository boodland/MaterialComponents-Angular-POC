import { Component, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar-header',
  templateUrl: './navbar-header.component.html',
  styleUrls: ['./navbar-header.component.scss']
})
export class NavbarHeaderComponent implements OnInit {

  title: String = 'Subject Hub';

  @Output() menuClickEvent: EventEmitter<string> = new EventEmitter();

  constructor() { }

  menuClick() {
    this.menuClickEvent.emit();
  }

  ngOnInit() {
  }

}
