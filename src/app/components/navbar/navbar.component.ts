import { Component, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  title: String = 'Subject Hub';

  @Output() menuClickEvent: EventEmitter<string> = new EventEmitter();

  constructor() { }

  menuClick() {
    this.menuClickEvent.emit();
  }

  ngOnInit() {
  }

}
