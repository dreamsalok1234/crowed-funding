import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import { BusinessComponent } from './business.component';
import { BusinessRoutes} from './business.routing';
import { SharedModule } from '../../shared/shared.module';
import { AccordionModule } from 'ngx-bootstrap/accordion';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(BusinessRoutes),
    SharedModule, AccordionModule.forRoot()
  ],
  declarations: [BusinessComponent]
})
export class BusinessModule { }
