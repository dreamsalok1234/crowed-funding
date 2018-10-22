import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import { PropertiesComponent } from './properties.component';
import {PropertiesRoutes} from './properties.routing';
import { SharedModule } from '../../shared/shared.module';
import { PropertyService } from '../../_services/root/property.service';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PropertiesRoutes),
    SharedModule
  ],
  declarations: [PropertiesComponent],
  providers: [
      PropertyService
  ]
})
export class PropertiesModule { }
