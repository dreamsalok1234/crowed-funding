import { Routes } from '@angular/router';
import { RoleListComponent } from './role-list/role-list.component';

export const ManageRoleRoutes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Role',
      status: false
    },
    children: [{
      path: 'rolelist',
      component: RoleListComponent,
      data: {
        breadcrumb: 'Role List',
        status: true
      }
    }
    ]
  }
];