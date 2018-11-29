import { Routes } from '@angular/router';
import { ConditionListComponent } from './condition-list/condition-list.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { DocumentListComponent } from './document-list/document-list.component';

import { FileRequestComponent } from './file-request/file-request.component';
import { GallaryListComponent } from './gallary-list/gallary-list.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { PropertySummaryListComponent } from './property-summary-list/property-summary-list.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddConditionsComponent } from './add-conditions/add-conditions.component';
import { AddPropertyComponent } from './add-property/add-property.component';
import { AddSummaryComponent } from './add-summary/add-summary.component';
import { UploadFileComponent } from './uploadfile/uploadfile.component';
import { UploadImageComponent } from './uploadimage/uploadimage.component';
import { ManagePropertyComponent } from './manage-property.component';
export const ManagePropertyRoutes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Property',
      status: false
    },
    component: ManagePropertyComponent,
    children: [
      {
        path: 'categorylist',
        component: CategoryListComponent,
        data: {
          breadcrumb: 'Category List',
          status: true
        }/*,
        loadChildren: './category-list/category-list.module#CategoryListModule'*/
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
        },
      /*,
        loadChildren: './add-category/add-category.module#AddCategoryModule'*/
      },
      {
        path: 'editcategory',
        component: AddCategoryComponent,
        data: {
          breadcrumb: 'Edit Category',
          status: true
        }
      },
      {
        path: 'addconditions',
        component: AddConditionsComponent,
        data: {
          breadcrumb: 'Add Conditions',
          status: true
        }
      },
      {
        path: 'editconditions',
        component: AddConditionsComponent,
        data: {
          breadcrumb: 'Edit Conditions',
          status: true
        }
      },
      {
        path: 'addproperty',
        component: AddPropertyComponent,
        data: {
          breadcrumb: 'Add Property',
          status: true
        }
      },
      {
        path: 'editproperty',
        component: AddPropertyComponent,
        data: {
          breadcrumb: 'Edit Property',
          status: true
        }
      },
      {
        path: 'addsummary',
        component: AddSummaryComponent,
        data: {
          breadcrumb: 'Summary',
          status: true
        }
      },
      {
        path: 'upload-property-document',
        component: UploadFileComponent,
        data: {
          breadcrumb: 'Upload Property Documents',
          status: true
        }
      },
      {
        path: 'upload-property-image',
        component: UploadImageComponent,
        data: {
          breadcrumb: 'Upload Image',
          status: true
        }
      },
    ]
  }
];