import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { RootComponent } from './root.component';
import { RootRoutes } from './root.routing';
import {SharedModule} from '../shared/shared.module';
import { PropertyService } from '../_services/root/property.service';

@NgModule({
  imports: [
      CommonModule,
    RouterModule.forChild(RootRoutes),
      SharedModule
  ],
  declarations: [RootComponent],
  providers: [
      PropertyService
  ]
})

export class RootModule {}
