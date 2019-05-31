import { NgModule } from '@angular/core';
import { AngularCropperjsModule } from 'angular-cropperjs';


import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { InjectableRxStompConfig, RxStompService, rxStompServiceFactory } from '@stomp/ng2-stompjs';
import { myRxStompConfig } from '../../my-rx-stomp.config';
import { SummaryComponent } from './summary/summary.component';
import { PageService } from '../pages.service';

@NgModule({
  imports: [
    ThemeModule,
    AngularCropperjsModule,
  ],
  declarations: [
    DashboardComponent,
    SummaryComponent,
  ],
  providers: [
    PageService,
  ],
})
export class DashboardModule { }
