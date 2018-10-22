import { Routes } from '@angular/router';

import { RootComponent } from './root.component';

export const RootRoutes: Routes = [{
  path: '',
  component: RootComponent,
  data: {
    breadcrumb: 'root',
    status: false
  }
}];
