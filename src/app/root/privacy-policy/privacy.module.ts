import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import { PrivacyComponent } from './privacy.component';
import {PrivacyRoutes} from './privacy.routing';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PrivacyRoutes),
    SharedModule
  ],
  declarations: [PrivacyComponent]
})
export class PrivacyModule { }
