import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AddCategoryComponent } from '../add-category/add-category.component';
import { PropertyService } from '../../../_services/admin/property.service';
import { CommonService } from '../../../_services/admin/common.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AddCategoryComponent

  ],
  providers: [PropertyService,CommonService]
})
export class CategoryListModule { }
