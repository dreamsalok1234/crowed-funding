import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PropertyService } from '../../../_services/admin/property.service';
import { CommonService } from '../../../_services/admin/common.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    

  ],
  providers: [PropertyService,CommonService]
})
export class AddConditionsModule { }
