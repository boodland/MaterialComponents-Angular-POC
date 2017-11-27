import {
  Component, AfterViewInit, ViewChild, ElementRef
} from '@angular/core';
import 'rxjs/add/operator/filter';

import { appRouterAnimation } from './app-routing.animations';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ appRouterAnimation ]
})
export class AppComponent implements AfterViewInit {

  topPosition = '0px';
  headerHeight = 0;

  @ViewChild('myScrollContainer') myScrollContainer: ElementRef;

  constructor(private router: Router) {

    const element = document.getElementsByTagName('mat-sidenav-content');
    console.log(element);

    this.router.events
    .filter(event => event instanceof NavigationStart)
    .subscribe((event) => {
      this.topPosition = -this.myScrollContainer.nativeElement.scrollTop + this.headerHeight + 'px';
    });
  }

  ngAfterViewInit(): void {
    this.headerHeight = document.querySelector('mat-toolbar').clientHeight;
  }

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
