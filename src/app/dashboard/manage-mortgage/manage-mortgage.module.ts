import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ManageMortgageComponent } from './manage-mortgage.component';
import { ManageMortgageRoutes } from './manage-mortgage.routing';
import { SharedModule } from '../../shared/shared.module';
import { MortgageListComponent } from './mortgage-list/mortgage-list.component';
import { AddMortageComponent } from './add-mortage/add-mortage.component';
import { PropertyService } from '../../_services/admin/property.service';
import { CommonService } from '../../_services/admin/common.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ManageMortgageRoutes),
    SharedModule
  ],
  declarations: [
    ManageMortgageComponent,
    MortgageListComponent,
    AddMortageComponent
  ],
  providers: [PropertyService,CommonService]
})
export class ManageMortgageModule { }
