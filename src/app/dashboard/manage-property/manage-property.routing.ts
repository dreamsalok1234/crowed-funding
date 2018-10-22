import { Routes } from '@angular/router';
import { ConditionListComponent } from './condition-list/condition-list.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { DocumentListComponent } from './document-list/document-list.component';
import { FileRequestComponent } from './file-request/file-request.component';
import { GallaryListComponent } from './gallary-list/gallary-list.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { PropertySummaryListComponent } from './property-summary-list/property-summary-list.component';
import { AddCategoryComponent } from './add-category/add-category.component';

export const ManagePropertyRoutes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Property',
      status: false
    },
    children: [
      {
        path: 'categorylist',
        component: CategoryListComponent,
        data: {
          breadcrumb: 'Category List',
          status: true
        }
      },
      {
        path: 'conditionlist',
        component: ConditionListComponent,
        data: {
          breadcrumb: 'Condition List',
          status: true
        }
      }, {
        path: 'documentlist',
        component: DocumentListComponent,
        data: {
          breadcrumb: 'Document List',
          status: true
        }
      },
      {
        path: 'filerequest',
        component: FileRequestComponent,
        data: {
          breadcrumb: 'File Request',
          status: true
        }
      }, {
        path: 'gallarylist',
        component: GallaryListComponent,
        data: {
          breadcrumb: 'Gallary List',
          status: true
        }
      },
      {
        path: 'propertylist',
        component: PropertyListComponent,
        data: {
          breadcrumb: 'Property List',
          status: true
        }
      }, {
        path: 'propertysummarylist',
        component: PropertySummaryListComponent,
        data: {
          breadcrumb: 'Property Summary List',
          status: true
        }
      },
      {
        path: 'addcategory',
        component: AddCategoryComponent,
        data: {
          breadcrumb: 'Add Category',
          status: true
        }
      }
    ]
  }
];