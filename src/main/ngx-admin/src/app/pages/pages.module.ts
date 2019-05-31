import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AngularCropperjsModule } from 'angular-cropperjs';
import { AvatarModule } from 'ngx-avatar';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { ProfileComponent } from './profile/profile.component';
import { PageService } from './pages.service';
import { UserComponent } from './user/user.component';
import { ArticleComponent } from './article/article.component';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    MiscellaneousModule,
    Ng2SmartTableModule,
    AngularCropperjsModule,
    AvatarModule,

  ],
  declarations: [
    ...PAGES_COMPONENTS,
    ProfileComponent,
    UserComponent,
    ArticleComponent,
  ],
  providers: [
    PageService,
  ],
})
export class PagesModule {
}
