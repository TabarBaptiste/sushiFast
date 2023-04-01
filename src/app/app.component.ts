import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  [x: string]: any;
  isDetailRoute = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isDetailRoute = this.activatedRoute.snapshot.firstChild?.routeConfig?.path === 'box-details/:id';
      }
    });
  }
}
