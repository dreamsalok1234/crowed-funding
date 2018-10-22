import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import { ContactComponent } from './contact.component';
import {ContactRoutes} from './contact.routing';
import { SharedModule } from '../../shared/shared.module';
import { ContactService } from '../../_services/root/contact.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ContactRoutes),
    SharedModule
  ],
  declarations: [ContactComponent],
  providers: [
      ContactService
  ]
})
export class ContactModule { }
