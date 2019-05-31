import { Component, Input, OnInit } from '@angular/core';

import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { UserData } from '../../../@core/data/users';
import { AnalyticsService } from '../../../@core/utils';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  @Input() position = 'normal';

  user: any;

  userMenu;

  constructor(private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private userService: UserData,
    private authService: NbAuthService,
    private analyticsService: AnalyticsService) {
    this.authService.onTokenChange()
      .subscribe((token: NbAuthJWTToken) => {
        this.user = token.getPayload(); // here we receive a payload from the token and assigne it to our `user` variable
        if (this.user.auth[0].authority === 'ROLE_ADMIN') {
          this.userMenu = [{ title: 'Profile', link: '/pages/profile' }, { title: 'Log out', link: '/auth/logout' }];
        } else {
          this.userMenu = [{ title: 'Profile', link: '/frontend/profile' }, { title: 'Log out', link: '/auth/logout' }];
        }
      });
  }

  ngOnInit() {
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');

    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }
}
