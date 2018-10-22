import { Routes } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';

export const ManageContactRoutes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Contact',
      status: false
    },
    children: [ {
        path: 'contactlist',
        component: ContactListComponent,
        data: {
          breadcrumb: 'Contact List',
          status: true
        }
      }
    ]
  }
];