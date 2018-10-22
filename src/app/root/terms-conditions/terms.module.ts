import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import { TermsComponent } from './terms.component';
import {TermsRoutes} from './terms.routing';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(TermsRoutes),
    SharedModule
  ],
  declarations: [TermsComponent]
})
export class TermsModule { }
