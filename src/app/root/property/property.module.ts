import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import { PropertyComponent } from './property.component';
import { PropertyRoutes} from './property.routing';
import { SharedModule } from '../../shared/shared.module';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { Ng2PageScrollModule } from 'ng2-page-scroll';

import { NgxGalleryModule } from 'ngx-gallery';
import { NgxLoremIpsumModule } from 'ngx-lorem-ipsum';
import { OptionsViewerComponent } from './options-viewer.component';
import { PropertyService } from '../../_services/root/property.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PropertyRoutes), AccordionModule.forRoot(),
    SharedModule, NgxGalleryModule,
    NgxLoremIpsumModule,
    Ng2PageScrollModule.forRoot()
  ],
  declarations: [PropertyComponent, OptionsViewerComponent],
  providers: [
      PropertyService
  ]
})
export class PropertyModule { }
