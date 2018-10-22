import { Routes } from '@angular/router';
import {AboutComponent} from './about.component';

export const AboutRoutes: Routes = [{
    path: '',
    component: AboutComponent,
    data: {
        breadcrumb: 'About Us'
    }
}];
