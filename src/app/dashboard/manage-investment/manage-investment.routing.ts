import { Routes } from '@angular/router';
import { ManageInvestmentComponent } from './manage-investment.component';
import { InvestmentListComponent } from './investment-list/investment-list.component';
import { AddInvestmentComponent } from './add-investment/add-investment.component';
export const ManageInvestmentRoutes: Routes = [
    {
        path: '',
        data: {
            breadcrumb: 'Investment',
            status: false
        },
        component: ManageInvestmentComponent,
        children: [
            {
                path: 'investmentlist',
                component: InvestmentListComponent,
                data: {
                    breadcrumb: 'Investment List',
                    status: true
                }
            },
            {
                path: 'addinvestment',
                component: AddInvestmentComponent,
                data: {
                    breadcrumb: 'Add Investment',
                    status: true
                },
            
            }
        ]
    }
];