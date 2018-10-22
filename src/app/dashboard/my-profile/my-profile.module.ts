import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import { MyProfileComponent } from './my-profile.component';
import {MyProfileRoutes} from './my-profile.routing';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MyProfileRoutes),
    SharedModule
  ],
  declarations: [MyProfileComponent]
})
export class MyProfileModule { }
