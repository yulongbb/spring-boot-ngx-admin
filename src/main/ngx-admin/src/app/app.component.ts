/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {


  constructor(private analytics: AnalyticsService, private router: Router) {
  }

  ngOnInit() {
    if (localStorage.getItem('auth_app_token') == null) {
      this.router.navigate(['auth/login']);
    }
    this.analytics.trackPageViews();
  }
}
