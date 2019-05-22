import { Component, OnInit } from '@angular/core';
import { NbLogoutComponent, NbAuthResult } from '@nebular/auth';

@Component({
  selector: 'ngx-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent extends NbLogoutComponent implements OnInit {
  ngOnInit() {
    localStorage.removeItem('auth_app_token');
    this.router.navigateByUrl('/auth/login');
  }
}
