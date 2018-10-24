import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { InvestmentComponent } from './investment.component';
import { InvestmentRoutes } from './investment.routing';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(InvestmentRoutes),
    SharedModule
  ],
  declarations: [InvestmentComponent]
})
export class InvestmentModule { }
