import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import { VideosComponent } from './videos.component';
import {VideosRoutes} from './videos.routing';
import { SharedModule } from '../../shared/shared.module';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { Ng2PageScrollModule } from 'ng2-page-scroll';

import { NgxGalleryModule } from 'ngx-gallery';
import { NgxLoremIpsumModule } from 'ngx-lorem-ipsum';
import { OptionsViewerComponent } from './options-viewer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(VideosRoutes), AccordionModule.forRoot(),
    SharedModule, NgxGalleryModule,
    NgxLoremIpsumModule,
    Ng2PageScrollModule.forRoot()
  ],
  declarations: [VideosComponent, OptionsViewerComponent]
})
export class VideosModule { }
