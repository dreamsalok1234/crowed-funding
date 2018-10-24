import { Routes } from '@angular/router';
import { InvestmentComponent } from './investment.component';
export const InvestmentRoutes: Routes = [{
  path: '',
  component: InvestmentComponent,
  data: {
    breadcrumb: 'Investment'
  }
}];
