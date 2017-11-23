import { Component } from '@angular/core';

import { appRouterAnimation } from './app-routing.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ appRouterAnimation ]
})
export class AppComponent {

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }

}
