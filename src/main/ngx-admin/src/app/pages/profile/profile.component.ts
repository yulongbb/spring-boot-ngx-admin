import { Component, OnInit, OnDestroy } from '@angular/core';
import { PageService } from '../pages.service';
import { NbAuthService, NbAuthJWTToken } from '@nebular/auth';
import { Router, ActivatedRoute } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { User, Address } from './users';


export enum UserMode {
  VIEW = 'View',
  EDIT = 'Edit',
  ADD = 'Add',
}

@Component({
  selector: 'ngx-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  user: User;
  address: Address;

  constructor(private pageService: PageService,
    private authService: NbAuthService,
    private router: Router,
    private route: ActivatedRoute,
    private toastrService: NbToastrService) {
    this.authService.onTokenChange()
      .subscribe((token: NbAuthJWTToken) => {
        const user = token.getPayload(); // here we receive a payload from the token and assigne it to our `user` variable
        this.pageService.getUserProfile(user.sub).subscribe(response => {
          this.user = response;
          this.address = this.user.address;
        });
      });
  }

  ngOnInit(): void {
    this.user = new User();
    this.address = new Address();
  }


  save() {
    this.user.address = this.address;
    this.pageService.saveUser(this.user).subscribe(response => {
    });
  }

  back() {
    this.router.navigate(['/pages/users']);
  }

}

