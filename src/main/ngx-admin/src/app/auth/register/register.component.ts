import { Component } from '@angular/core';
import { NbRegisterComponent, NbAuthResult } from '@nebular/auth';

@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent extends NbRegisterComponent {

  register() {
    this.errors = [];
    this.messages = [];
    this.submitted = true;
    this.user.roles = ['ROLE_ADMIN'];
    this.service.register(this.strategy, this.user).subscribe((result: NbAuthResult) => {
      this.submitted = false;
      if (result.isSuccess()) {
        this.messages = ['注册成功！即将进入系统'];
      } else {
        this.errors = ['注册失败'];
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
