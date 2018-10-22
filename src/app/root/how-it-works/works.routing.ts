import { Routes } from '@angular/router';
import {WorksComponent} from './works.component';

export const WorksRoutes: Routes = [{
    path: '',
    component: WorksComponent,
    data: {
        breadcrumb: 'How It Works'
    }
}];
