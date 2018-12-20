import { Component, OnInit, ViewChild, ViewEncapsulation, ElementRef, AfterViewInit, ViewContainerRef, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { UserService } from '../../../_services/admin/user.service';
import { CommonService } from '../../../_services/admin/common.service';
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contactList: any;
  constructor(public userService: UserService, public commmonService: CommonService, private toastr: ToastsManager, vcr: ViewContainerRef)
{
  this.toastr.setRootViewContainerRef(vcr);
}

  ngOnInit() {

    this.contactListRequest();
  }

  contactListRequest() {
    let objectType = this;
    this.userService.getContactList(function (err, response) {
      if (err)
        objectType.toastr.error("Something Going Wrong", null, { autoDismiss: true, maxOpened: 1, preventDuplicates: true });
      if (response.statusCode == 200) {
        objectType.contactList = response.data.data;
      }
      else
        objectType.toastr.error(response.data.message, null, { autoDismiss: true, maxOpened: 1, preventDuplicates: true });
    });
  }
}
