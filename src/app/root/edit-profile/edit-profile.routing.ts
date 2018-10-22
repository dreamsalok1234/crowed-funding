import { Routes } from '@angular/router';
import { EditProfileComponent } from './edit-profile.component';

export const EditProfileRoutes: Routes = [{
  path: '',
  component: EditProfileComponent,
  data: {
    breadcrumb: 'Edit Profile'
  }
}];
