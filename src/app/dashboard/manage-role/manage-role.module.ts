import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ManageRoleComponent } from './manage-role.component';
import { ManageRoleRoutes } from './manage-role.routing';
import { SharedModule } from '../../shared/shared.module';
import { RoleListComponent } from './role-list/role-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ManageRoleRoutes),
    SharedModule
  ],
  declarations: [
    ManageRoleComponent,
    RoleListComponent
  ]
})
export class ManageRoleModule { }
