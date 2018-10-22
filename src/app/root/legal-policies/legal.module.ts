import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import { LegalComponent } from './legal.component';
import {LegalRoutes} from './legal.routing';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LegalRoutes),
    SharedModule
  ],
  declarations: [LegalComponent]
})
export class LegalModule { }
