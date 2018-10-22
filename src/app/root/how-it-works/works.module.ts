import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import { WorksComponent } from './works.component';
import {WorksRoutes} from './works.routing';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(WorksRoutes),
    SharedModule
  ],
  declarations: [WorksComponent]
})
export class WorksModule { }
