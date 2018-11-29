import { Component, OnInit, ViewChild, ViewEncapsulation, ElementRef, AfterViewInit, ViewContainerRef, Output } from '@angular/core';
import { state, style, transition, animate, trigger, AUTO_STYLE } from '@angular/animations';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { PropertyService } from '../../../_services/admin/property.service';
import { CommonService } from '../../../_services/admin/common.service';

@Component({
  selector: 'app-mortgage-list',
  templateUrl: './mortgage-list.component.html',
  styleUrls: ['./mortgage-list.component.css']
})
export class MortgageListComponent implements OnInit {
  
  errorMsg = true;
  mortgageItemList: any;
  showloading = false;

  constructor(private propertyService: PropertyService, private commonService: CommonService, private toastr: ToastsManager, vcr: ViewContainerRef, private router: Router) { 
	this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  	this.listMortgage();
  }
  listMortgage () {
  	this.showloading = true;
  	var objectType = this;
  	this.propertyService.getMortgageList(function(err, response){ 
  		debugger;
  		objectType.showloading = false;
  		if( err )
  		  objectType.toastr.error("Something Going Wrong",null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true});
  		if( response.statusCode == 200 ) {
  			objectType.mortgageItemList = response.data.data;
  		}
  		else 
  		  objectType.toastr.error(response.data.message,null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true}); 
  	})
  }

  DeleteMortgage(catId, rowIndex) {
  	if ( confirm("Are You Sure To Delete ") ) {
  		this.showloading = true;
  		var objectType = this;
  		this.commonService.deleteItem({catId: catId, tab: 'mortgage'},function(err, response){   			
			objectType.showloading = false;
			if( err )
			  objectType.toastr.error("Something Going Wrong",null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true});
			if( response.statusCode == 200 ){
				objectType.mortgageItemList.splice(rowIndex,1);
				objectType.toastr.success("Item Deleted Successfully",null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true});
			}			
			else 
			  objectType.toastr.error(response.data.message,null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true}); 
		})
  	}  	
  }

  ChangeMortgageStatus(catId, rowIndex) {
  	if ( confirm("Are You Sure To Change Status ") ) {
  		this.showloading = true;
  		var objectType = this;
  		var statusVal = this.mortgageItemList[rowIndex].status == 0 ? 1 : 0;
  		
  		this.commonService.updateItemStatus({catId: catId, tab: 'mortgage', status: statusVal},function(err, response){ 

			objectType.showloading = false;
			if( err )
			  objectType.toastr.error("Something Going Wrong",null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true});
			if( response.statusCode == 200 ){
				objectType.mortgageItemList[rowIndex].status = statusVal;
				objectType.toastr.success(response.data.message,null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true});
			}			
			else 
			  objectType.toastr.error(response.data.message,null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true}); 
		})
  	} 
  }

  EditMortgage(catId, rowIndex) {
  	localStorage.setItem("mortgageInfo", JSON.stringify(this.mortgageItemList[rowIndex]));
  	//this.messageEvent.emit(this.categoryList[rowIndex]);
  	this.router.navigate(['/dashboard/manage-mortgage/editmortgage']);
  }

}
