import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EditProfileComponent } from './edit-profile.component';
import { EditProfileRoutes } from './edit-profile.routing';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(EditProfileRoutes),
    SharedModule
  ],
  declarations: [EditProfileComponent]
})
export class EditProfileModule { }
