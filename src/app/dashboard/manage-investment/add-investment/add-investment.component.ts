import { Component, OnInit, ViewChild, AfterViewInit, ViewEncapsulation, ElementRef, ViewContainerRef } from '@angular/core';
import { state, style, transition, animate, trigger, AUTO_STYLE } from '@angular/animations';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { InvestmentService } from '../../../_services/admin/investment.service';
import { PropertyService } from '../../../_services/admin/property.service';
import { UserService } from '../../../_services/admin/user.service';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';

@Component({
  selector: 'app-add-investment',
  templateUrl: './add-investment.component.html',
  styleUrls: ['./add-investment.component.css']
})
export class AddInvestmentComponent implements OnInit {
  model: any = { property: '', account: '', checkNumber: '', userId: 0, customerName: '', mode: 'cash', amount: 0 };
  errorMsg = true;
  showloading = false;
  editItemData: any;
  actionBtn = 'Save Investment';
  userSearchItemList : any;
  propertySearchList: any;
  showCustomerAutoSuggest = false;
  showPropertyAutoSuggest = false;
  otherSelected = false;
  // @ViewChild(CategoryListComponent) categoryList;
  constructor(private investmentService: InvestmentService, private toastr: ToastsManager, vcr: ViewContainerRef, private router: Router, private activeRoute: ActivatedRoute, private userService: UserService, private propertyService: PropertyService) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    //setTimeout(function () { this.model.mode = 'cash';},1000)
  }
  addInvestment() {
    debugger;
    if (this.model.customerName == '' || this.model.customerName == '' || this.model.amount == '') {
      this.errorMsg = false;
      return;
    }
    this.errorMsg = true;
    this.showloading = true;
    var objectType = this;
    debugger;
    if (this.model.userId > 0)
      this.investmentService.addInvestment(this.model, function (err, response) {
        objectType.showloading = false;
        if (err)
          objectType.toastr.error("Something Going Wrong", null, { autoDismiss: true, maxOpened: 1, preventDuplicates: true });
        if (response.statusCode == 200) {
          objectType.toastr.success(response.data.message, null, { autoDismiss: true, maxOpened: 1, preventDuplicates: true });
          objectType.router.navigate(['/dashboard/manage-property/propertylist']);
          //objectType.model = { catname: '', fcatname: '', grecatname: '', gcatname: '' };
        }
        else
          objectType.toastr.error(response.data.message, null, { autoDismiss: true, maxOpened: 1, preventDuplicates: true });
      });
  }
  BindCustomer () {
    
    if (this.model.customerName.length > 2) {
      var objectType = this;
      this.userService.searchUserList(this.model.customerName,function(err, response){
        debugger;
        if(err) {
          objectType.userSearchItemList = [];
          objectType.showCustomerAutoSuggest = false;
        }
        if(response.statusCode == 200) 
          objectType.userSearchItemList = response.data.data;
        debugger;
        objectType.showCustomerAutoSuggest = true;
      });
    }
    else {
      this.userSearchItemList = [];
      this.showCustomerAutoSuggest = false;
    }
   
  }
  bindProperty() {

    if (this.model.property.length > 2) {
      var objectType = this;
      this.propertyService.searchPropertyList(this.model.property, function (err, response) {
        debugger;
        if (err) {
          objectType.propertySearchList = [];
          objectType.showPropertyAutoSuggest = false;
        }
        if (response.statusCode == 200)
          objectType.propertySearchList = response.data.data;
        
        objectType.showPropertyAutoSuggest = true;
      });
    }
    else {
      this.propertySearchList = [];
      this.showPropertyAutoSuggest = false;
    }

  }

  setValues(keyindex){
    this.userSearchItemList;
    this.model.customerName = this.userSearchItemList[keyindex].fullName;
    this.model.userId = this.userSearchItemList[keyindex].userId;
    this.userSearchItemList = [];
    this.showCustomerAutoSuggest = false;
  }
  setProperty(keyindex) {
    debugger;
    this.propertySearchList;
    this.model.property = this.propertySearchList[keyindex].name;
    this.model.propertyId = this.propertySearchList[keyindex].propertyId;
    this.propertySearchList = [];
    this.showPropertyAutoSuggest = false;
  }
  otherRadioSelected(v){
  if(v=='cash')
    this.otherSelected = false;
    else
    this.otherSelected = true;
  }

}