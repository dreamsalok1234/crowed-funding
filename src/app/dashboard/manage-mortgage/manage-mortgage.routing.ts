import { Routes } from '@angular/router';
import { MortgageListComponent } from './mortgage-list/mortgage-list.component';

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
      }
    ]
  }
];