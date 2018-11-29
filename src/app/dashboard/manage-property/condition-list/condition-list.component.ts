import { Component, OnInit, ViewChild, ViewEncapsulation, ElementRef, AfterViewInit, ViewContainerRef, Output } from '@angular/core';
import { state, style, transition, animate, trigger, AUTO_STYLE } from '@angular/animations';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { PropertyService } from '../../../_services/admin/property.service';
import { CommonService } from '../../../_services/admin/common.service';

@Component({
  selector: 'app-condition-list',
  templateUrl: './condition-list.component.html',
  styleUrls: ['./condition-list.component.css']
})
export class ConditionListComponent implements OnInit {

  model:any = {catname: '', fcatname: '', grecatname: '', gcatname: ''};
  errorMsg = true;
  conditionList: any;
  showloading = false;
  public categoryItem :  any;
  categoryId = 0;
  //@Output() messageEvent = new EventEmitter<string>();
  constructor(private propertyService: PropertyService, private commonService: CommonService, private toastr: ToastsManager, vcr: ViewContainerRef, private router: Router) { 
	this.toastr.setRootViewContainerRef(vcr);
  }


  ngOnInit () { this.listConditions(); }

  listConditions () {
  	this.showloading = true;
	var objectType = this;
	this.propertyService.getConditionsList(function(err, response){ 
		debugger;
		objectType.showloading = false;
		if( err )
		  objectType.toastr.error("Something Going Wrong",null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true});
		if( response.statusCode == 200 ) {
			objectType.conditionList = response.data.data;
		}
		else 
		  objectType.toastr.error(response.data.message,null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true}); 
	})
  }

  DeleteCondition(catId, rowIndex) {
  	if ( confirm("Are You Sure To Delete ") ) {
  		this.showloading = true;
  		var objectType = this;
  		this.commonService.deleteItem({catId: catId, tab: 'propertycondition'},function(err, response){   			
			objectType.showloading = false;
			if( err )
			  objectType.toastr.error("Something Going Wrong",null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true});
			if( response.statusCode == 200 ){
				objectType.conditionList.splice(rowIndex,1);
				objectType.toastr.success("Item Deleted Successfully",null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true});
			}			
			else 
			  objectType.toastr.error(response.data.message,null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true}); 
		})
  	}  	
  }

  ChangeConditionStatus(catId, rowIndex) {
  	if ( confirm("Are You Sure To Change Status ") ) {
  		this.showloading = true;
  		var objectType = this;
  		var statusVal = this.conditionList[rowIndex].status == 0 ? 1 : 0;
  		
  		this.commonService.updateItemStatus({catId: catId, tab: 'propertycondition', status: statusVal},function(err, response){ 

			objectType.showloading = false;
			if( err )
			  objectType.toastr.error("Something Going Wrong",null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true});
			if( response.statusCode == 200 ){
				objectType.conditionList[rowIndex].status = statusVal;
				objectType.toastr.success(response.data.message,null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true});
			}			
			else 
			  objectType.toastr.error(response.data.message,null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true}); 
		})
  	} 
  }

  EditCondition(catId, rowIndex) {
  	localStorage.setItem("conditionInfo", JSON.stringify(this.conditionList[rowIndex]));
  	//this.messageEvent.emit(this.categoryList[rowIndex]);
  	this.router.navigate(['/dashboard/manage-property/editconditions']);
  }

}
