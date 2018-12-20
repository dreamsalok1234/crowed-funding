import { Component, OnInit, ViewChild, ViewEncapsulation, ElementRef, AfterViewInit, ViewContainerRef, Output } from '@angular/core';
import { state, style, transition, animate, trigger, AUTO_STYLE } from '@angular/animations';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../../../_services/admin/user.service';
import { CommonService } from '../../../_services/admin/common.service';

@Component({
  selector: 'app-catlist',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  
  constructor(public userService: UserService, public commonService: CommonService, private toastr: ToastsManager, vcr: ViewContainerRef)
   { this.toastr.setRootViewContainerRef(vcr);
  }
  userlist : any;
  showloading = false;
  ngOnInit () { 
    this.userListRequest();
   }

  userListRequest () {
     let objectType = this;
    this.userService.getUserList(function (err, response) {
      if (err)
        objectType.toastr.error("Something Going Wrong", null, { autoDismiss: true, maxOpened: 1, preventDuplicates: true });
      if (response.statusCode == 200) {
        objectType.userlist = response.data.data;
      }
      else
        objectType.toastr.error(response.data.message, null, { autoDismiss: true, maxOpened: 1, preventDuplicates: true }); 
    })
   }

  DeleteUser(catId, rowIndex) {
    if (confirm("Are You Sure To Delete ")) {
      this.showloading = true;
      var objectType = this;
      this.commonService.deleteItem({ catId: catId, tab: 'user' }, function (err, response) {
        objectType.showloading = false;
        if (err)
          objectType.toastr.error("Something Going Wrong", null, { autoDismiss: true, maxOpened: 1, preventDuplicates: true });
        if (response.statusCode == 200) {
          objectType.userlist.splice(rowIndex, 1);
          objectType.toastr.success("Category Deleted Successfully", null, { autoDismiss: true, maxOpened: 1, preventDuplicates: true });
        }
        else
          objectType.toastr.error(response.data.message, null, { autoDismiss: true, maxOpened: 1, preventDuplicates: true });
      })
    }
  }

  ChangeUserStatus(catId, rowIndex) {
    if (confirm("Are You Sure To Change Status ")) {
      this.showloading = true;
      var objectType = this;
      var statusVal = this.userlist[rowIndex].status == 0 ? 1 : 0;

      this.commonService.updateItemStatus({ catId: catId, tab: 'user', status: statusVal }, function (err, response) {

        objectType.showloading = false;
        if (err)
          objectType.toastr.error("Something Going Wrong", null, { autoDismiss: true, maxOpened: 1, preventDuplicates: true });
        if (response.statusCode == 200) {
          objectType.userlist[rowIndex].status = statusVal;
          objectType.toastr.success(response.data.message, null, { autoDismiss: true, maxOpened: 1, preventDuplicates: true });
        }
        else
          objectType.toastr.error(response.data.message, null, { autoDismiss: true, maxOpened: 1, preventDuplicates: true });
      })
    }
  }
  
}
