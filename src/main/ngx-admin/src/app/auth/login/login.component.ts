import { Component, OnInit } from '@angular/core';
import { NbLoginComponent, NbAuthService, NbAuthResult } from '@nebular/auth';


import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})
export class LoginComponent extends NbLoginComponent implements OnInit {


  ngOnInit() {
  }

  login(): void {
    this.errors = [];
    this.messages = [];
    this.submitted = true;
    this.service.authenticate(this.strategy, this.user).subscribe((result: NbAuthResult) => {
      this.submitted = false;
      if (result.isSuccess()) {
        this.messages = ['登录成功！即将进入系统'];
      } else {
        this.errors = ['用户名或密码有误'];
      }
      const redirect = result.getRedirect();
      if (redirect) {
        setTimeout(() => {
          return this.router.navigateByUrl('pages/dashboard');
        }, this.redirectDelay);
      }
      this.cd.detectChanges();
    });
  }
}
