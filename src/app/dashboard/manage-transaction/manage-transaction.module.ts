import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ManageTransactionComponent } from './manage-transaction.component';
import { ManageTransactionRoutes } from './manage-transaction.routing';
import { SharedModule } from '../../shared/shared.module';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ManageTransactionRoutes),
    SharedModule
  ],
  declarations: [
    ManageTransactionComponent,
    TransactionHistoryComponent,
    TransactionListComponent
  ]
})
export class ManageTransactionModule { }
