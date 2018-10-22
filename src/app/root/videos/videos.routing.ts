import { Routes } from '@angular/router';
import {VideosComponent} from './videos.component';

export const VideosRoutes: Routes = [{
    path: '',
    component: VideosComponent,
    data: {
        breadcrumb: 'Videos Us'
    }
}];
