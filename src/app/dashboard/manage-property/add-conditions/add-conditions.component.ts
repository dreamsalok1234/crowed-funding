import { Component, OnInit, ViewChild, AfterViewInit, ViewEncapsulation, ElementRef,  ViewContainerRef } from '@angular/core';
import { state, style, transition, animate, trigger, AUTO_STYLE } from '@angular/animations';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { PropertyService } from '../../../_services/admin/property.service';
import { CategoryListComponent } from "../category-list/category-list.component";

@Component({
  selector: 'app-addcat',
  templateUrl: './add-conditions.component.html',
  styleUrls: ['./add-conditions.component.css'],
  providers: [CategoryListComponent]
})
export class AddConditionsComponent implements OnInit {
  viewMode = 'tab1';
  model:any = {catname: '', fcatname: '', grecatname: '', gcatname: '', categoryId: 0};
  errorMsg = true;
  showloading = false;
  editItemData : any;
  actionBtn = 'Save Condition';
 // @ViewChild(CategoryListComponent) categoryList;
  constructor(private propertyService: PropertyService, private toastr: ToastsManager, vcr: ViewContainerRef, private router: Router, private activeRoute: ActivatedRoute) { 
	this.toastr.setRootViewContainerRef(vcr);
  }
	
  ngOnInit() {

  	if(this.activeRoute.snapshot.routeConfig.path !== 'editconditions')
  		localStorage.removeItem('categoryInfo');
  	if(localStorage.getItem('conditionInfo') != undefined &&  localStorage.getItem('conditionInfo') != '' &&  localStorage.getItem('conditionInfo') != null) {
  		this.editItemData = JSON.parse(localStorage.getItem('conditionInfo'));
  		this.model.catname = this.editItemData.condition;
  		this.model.fcatname = this.editItemData.conditionFr;
  		this.model.grecatname = this.editItemData.conditionGr;
  		this.model.categoryId = this.editItemData.conditionId;
  		this.model.gcatname = this.editItemData.conditionIt;
  		//localStorage.removeItem('categoryInfo');
  		this.actionBtn = 'Update Condition';
  	}
  	else if(this.activeRoute.snapshot.routeConfig.path == 'editconditions')
  		this.router.navigate(['/dashboard/manage-property/addconditions']);
  }
  addCondition () {
	if( this.model.catname == '') {
	  this.errorMsg = false;
	  return ;
	}
	this.errorMsg = true;
	this.showloading = true;
	var objectType = this;
	debugger;
	if( this.model.categoryId > 0 ) 
		this.propertyService.updateConditions(this.model, function(err, response){    
			debugger;	
			objectType.showloading = false;
			if( err )
			  objectType.toastr.error("Something Going Wrong",null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true});
			if( response.statusCode == 200 ) {
				objectType.toastr.success(response.data.message,null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true});
				objectType.model = {catname: '', fcatname: '', grecatname: '', gcatname: '', categoryId: 0};
				localStorage.removeItem('categoryInfo');
			}
			else 
			  objectType.toastr.error(response.data.message,null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true}); 
		});
	else	
		this.propertyService.addConditions(this.model, function(err, response){    	
			objectType.showloading = false;
			if( err )
			  objectType.toastr.error("Something Going Wrong",null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true});
			if( response.statusCode == 200 ) {
				objectType.toastr.success(response.data.message,null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true});
				objectType.model = {catname: '', fcatname: '', grecatname: '', gcatname: ''};
			}
			else 
			  objectType.toastr.error(response.data.message,null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true}); 
		});
  }
  
}
