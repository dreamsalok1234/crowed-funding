import { Routes } from '@angular/router';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';

export const ManageTransactionRoutes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Transaction',
      status: false
    },
    children: [{
      path: 'transactionhistory',
      component: TransactionHistoryComponent,
      data: {
        breadcrumb: 'Transaction History',
        status: true
      }
    },
      {
        path: 'transactionlist',
        component: TransactionListComponent,
        data: {
          breadcrumb: 'Transaction List',
          status: true
        }
      }
    ]
  }
    ]
