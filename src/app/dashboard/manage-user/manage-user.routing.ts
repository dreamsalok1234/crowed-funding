import { Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';

export const ManageUserRoutes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'userComponents',
      status: false
    },
    children: [
 {
        path: 'userlist',
        component: UserListComponent,
        data: {
          breadcrumb: 'User List',
          status: true
        }
      }
    ]
  }
];