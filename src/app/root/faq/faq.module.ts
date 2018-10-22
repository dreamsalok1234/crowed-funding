import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import { FaqComponent } from './faq.component';
import {FaqRoutes} from './faq.routing';
import { SharedModule } from '../../shared/shared.module';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(FaqRoutes),
    SharedModule, AccordionModule.forRoot(), Ng2PageScrollModule
  ],
  declarations: [FaqComponent]
})
export class FaqModule { }
