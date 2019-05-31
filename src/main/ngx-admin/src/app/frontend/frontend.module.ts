import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../@theme/theme.module';
import { FrontendRoutingModule } from './frontend-routing.component';
import { FrontendComponent } from './frontend.component';
import { FrontendService } from './frontend.service';
import { DashboardModule } from './dashboard/dashboard.module';
import { ProfileComponent } from './profile/profile.component';

const PAGES_COMPONENTS = [
    FrontendComponent,
];

@NgModule({
    imports: [
        FrontendRoutingModule,
        ThemeModule,
        Ng2SmartTableModule,
        DashboardModule,
    ],
    declarations: [
        ...PAGES_COMPONENTS,
        ProfileComponent,
    ],
    providers: [
        FrontendService,
    ],
})
export class FrontendModule {
}
