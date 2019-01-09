import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InvestmentListComponent } from '../investment-list/investment-list.component';
import { CommonService } from '../../../_services/admin/common.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        InvestmentListComponent

    ],
    providers: [CommonService]
})
export class AddInvestmentModule { }
