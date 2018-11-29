import { Routes } from '@angular/router';
import { MortgageListComponent } from './mortgage-list/mortgage-list.component';
import { AddMortageComponent } from './add-mortage/add-mortage.component';

export const ManageMortgageRoutes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Mortgage',
      status: false
    },
    children: [
    {
        path: 'mortgagelist',
        component: MortgageListComponent,
        data: {
          breadcrumb: 'Mortgage List',
          status: true
        }
      },
      {
        path: 'addmortage',
        component: AddMortageComponent,
        data: {
          breadcrumb: 'Add Mortage',
          status: true
        }
      },
      {
        path: 'editmortgage',
        component: AddMortageComponent,
        data: {
          breadcrumb: 'Edit Mortage',
          status: true
        }
      },
    ]
  }
];