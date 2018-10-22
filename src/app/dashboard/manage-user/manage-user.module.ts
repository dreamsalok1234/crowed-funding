import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ManageUserComponent } from './manage-user.component';
import { ManageUserRoutes } from './manage-user.routing';
import { SharedModule } from '../../shared/shared.module';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ManageUserRoutes),
        SharedModule
    ],
    declarations: [
        ManageUserComponent,
          UserListComponent
        ]
})
export class ManageUserModule { }
