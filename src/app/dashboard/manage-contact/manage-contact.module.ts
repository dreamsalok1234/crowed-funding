import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ManageContactComponent } from './manage-contact.component';
import { ManageContactRoutes } from './manage-contact.routing';
import { SharedModule } from '../../shared/shared.module';
import { ContactListComponent } from './contact-list/contact-list.component';
import { UserService } from '../../_services/admin/user.service';
import { CommonService } from '../../_services/admin/common.service';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ManageContactRoutes),
    SharedModule
  ],
  declarations: [
    ManageContactComponent,
    ContactListComponent
  ],
  providers: [UserService, CommonService]
})
export class ManageContactModule { }
