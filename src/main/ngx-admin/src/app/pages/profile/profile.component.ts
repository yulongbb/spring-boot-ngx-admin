import { Component, OnInit } from '@angular/core';
import { PageService } from '../pages.service';
import { NbAuthService, NbAuthJWTToken } from '@nebular/auth';

@Component({
  selector: 'ngx-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  user;

  constructor(private pageService: PageService, private authService: NbAuthService) { }

  ngOnInit() {
    this.authService.onTokenChange()
      .subscribe((token: NbAuthJWTToken) => {
        this.user = token.getPayload(); // here we receive a payload from the token and assigne it to our `user` variable
        this.pageService.getUserProfile(this.user.sub).subscribe(response => {
          this.user = response;
        });
      });
  }

}
