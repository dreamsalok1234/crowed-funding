import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import { AboutComponent } from './about.component';
import {AboutRoutes} from './about.routing';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AboutRoutes),
    SharedModule
  ],
  declarations: [AboutComponent]
})
export class AboutModule { }
