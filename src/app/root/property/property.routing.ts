import { Routes } from '@angular/router';
import {PropertyComponent} from './property.component';

export const PropertyRoutes: Routes = [{
    path: '',
    component: PropertyComponent,
    data: {
        breadcrumb: 'Property'
    }
}];
