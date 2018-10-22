import { Routes } from '@angular/router';
import {BusinessComponent} from './business.component';

export const BusinessRoutes: Routes = [{
    path: '',
    component: BusinessComponent,
    data: {
        breadcrumb: 'Business Model'
    }
}];
