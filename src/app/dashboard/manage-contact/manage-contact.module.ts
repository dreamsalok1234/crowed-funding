import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ManageContactComponent } from './manage-contact.component';
import { ManageContactRoutes } from './manage-contact.routing';
import { SharedModule } from '../../shared/shared.module';
import { ContactListComponent } from './contact-list/contact-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ManageContactRoutes),
    SharedModule
  ],
  declarations: [
    ManageContactComponent,
    ContactListComponent
  ]
})
export class ManageContactModule { }
