import { Component, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';

import { takeWhile } from 'rxjs/operators';
import { NbAuthComponent } from '@nebular/auth';

@Component({
    selector: 'ngx-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
})
export class NgxAuthComponent extends NbAuthComponent {

}
