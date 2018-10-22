import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ManageMortgageComponent } from './manage-mortgage.component';
import { ManageMortgageRoutes } from './manage-mortgage.routing';
import { SharedModule } from '../../shared/shared.module';
import { MortgageListComponent } from './mortgage-list/mortgage-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ManageMortgageRoutes),
    SharedModule
  ],
  declarations: [
    ManageMortgageComponent,
    MortgageListComponent
  ]
})
export class ManageMortgageModule { }
