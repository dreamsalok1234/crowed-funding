import {NgModule} from '@angular/core';
import {WithSocialComponent} from './with-social/with-social.component';
import {RouterModule} from '@angular/router';

import {CommonModule} from '@angular/common';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginRoutes} from './login.routing';
import {SharedModule} from '../../shared/shared.module';
import { AuthenticationService } from '../../_services/admin/authentication.service';
import { AlertComponent } from '../../_directives/index';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(LoginRoutes),
        SharedModule,
        ToastModule.forRoot()
        
    ],
    declarations: [WithSocialComponent, AlertComponent],
    providers: [AuthenticationService]
})

export class LoginModule {}
