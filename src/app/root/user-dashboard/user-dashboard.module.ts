import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UserDashboardComponent } from './user-dashboard.component';
import { UserDashboardRoutes } from './user-dashboard.routing';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UserDashboardRoutes),
    SharedModule
  ],
  declarations: [UserDashboardComponent]
})
export class UserDashboardModule { }
