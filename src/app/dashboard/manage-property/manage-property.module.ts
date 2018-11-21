import { NgModule, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
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
import { PropertyService } from '../../_services/admin/property.service';
import { CommonService } from '../../_services/admin/common.service';

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
    AddCategoryComponent

  ],
  providers: [PropertyService,CommonService]
})
export class ManagePropertyModule { }
