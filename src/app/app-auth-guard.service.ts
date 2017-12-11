import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class AppAuthGuardService {

  constructor(private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot): boolean {
      const message: string = route.data['message'];
      return this.navigateToDialog(message);
    }

    canActivateChild(route: ActivatedRouteSnapshot): boolean {
      return this.canActivate(route);
    }

    navigateToDialog(message: string): boolean {
      this.router.navigate([
        {
          outlets: { dialog: ['dialog'] }
        }
      ], {
          queryParams: { message: `navigate to ${message}` },
          skipLocationChange: true
        }
      );

      return false;
    }

}
