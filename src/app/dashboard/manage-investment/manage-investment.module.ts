import { NgModule, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { ManageInvestmentComponent } from './manage-investment.component';
import { ManageInvestmentRoutes } from './manage-investment.routing';
import { SharedModule } from '../../shared/shared.module';
import { InvestmentListComponent } from './investment-list/investment-list.component';
import { AddInvestmentComponent } from './add-investment/add-investment.component';
import { CommonService } from '../../_services/admin/common.service';
import { InvestmentService } from '../../_services/admin/investment.service';
import { PropertyService } from '../../_services/admin/property.service';
import { UserService } from '../../_services/admin/user.service';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ManageInvestmentRoutes),
        SharedModule
    ],
    declarations: [
        ManageInvestmentComponent,
        InvestmentListComponent,
        AddInvestmentComponent,


    ],
    providers: [CommonService, InvestmentService, PropertyService, UserService]
})
export class ManageInvestmentModule { }
