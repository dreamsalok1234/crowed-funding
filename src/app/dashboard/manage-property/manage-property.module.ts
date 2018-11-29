import { NgModule, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { ManagePropertyComponent } from './manage-property.component';
import { ManagePropertyRoutes } from './manage-property.routing';
import { SharedModule } from '../../shared/shared.module';
import { ConditionListComponent } from './condition-list/condition-list.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { DocumentListComponent } from './document-list/document-list.component';
import { FileRequestComponent } from './file-request/file-request.component';
import { GallaryListComponent } from './gallary-list/gallary-list.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { PropertySummaryListComponent } from './property-summary-list/property-summary-list.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddConditionsComponent } from './add-conditions/add-conditions.component';
import { PropertyService } from '../../_services/admin/property.service';
import { CommonService } from '../../_services/admin/common.service';
import { AddPropertyComponent } from './add-property/add-property.component';
import { AddSummaryComponent } from './add-summary/add-summary.component';
import { UploadFileComponent } from './uploadfile/uploadfile.component';
import { UploadImageComponent } from './uploadimage/uploadimage.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ManagePropertyRoutes),
    SharedModule
  ],
  declarations: [
    ManagePropertyComponent,
    ConditionListComponent,
    CategoryListComponent,
    DocumentListComponent,
    FileRequestComponent,
    GallaryListComponent,
    PropertyListComponent,
    PropertySummaryListComponent,
    AddCategoryComponent,
    AddConditionsComponent,
    AddPropertyComponent,
    AddSummaryComponent,
    UploadFileComponent,
    UploadImageComponent

  ],
  providers: [PropertyService,CommonService]
})
export class ManagePropertyModule { }
