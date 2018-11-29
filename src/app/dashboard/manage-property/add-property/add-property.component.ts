import { Component, OnInit, ViewChild, AfterViewInit, ViewEncapsulation, ElementRef,  ViewContainerRef } from '@angular/core';
import { state, style, transition, animate, trigger, AUTO_STYLE } from '@angular/animations';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { PropertyService } from '../../../_services/admin/property.service';

@Component({
  selector: 'app-addproperty',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  viewMode = 'tab1';
  model:any = {};
  errorMsg = true;
  showloading = false;
  editItemData : any;
  nextstep = false;
  actionBtn = 'Save';
  actionNextBtn = 'Save & Next';
  conditionListItem : any;
  categoryListItem : any;
  mortgageListItem : any;
 // @ViewChild(CategoryListComponent) categoryList;
  constructor(private propertyService: PropertyService, private toastr: ToastsManager, vcr: ViewContainerRef, private router: Router, private activeRoute: ActivatedRoute) { 
	this.toastr.setRootViewContainerRef(vcr);
  }
	
  ngOnInit() {

  	if(this.activeRoute.snapshot.routeConfig.path !== 'editproperty')
  		localStorage.removeItem('propertyInfo');
  	if(localStorage.getItem('propertyInfo') != undefined &&  localStorage.getItem('propertyInfo') != '' &&  localStorage.getItem('propertyInfo') != null) {
  		this.editItemData = JSON.parse(localStorage.getItem('propertyInfo'));
  		this.model.catname = this.editItemData.name;
  		this.model.fcatname = this.editItemData.nameFr;
  		this.model.grecatname = this.editItemData.nameGr;
  		this.model.categoryId = this.editItemData.categoryId;
  		this.model.gcatname = this.editItemData.nameIt;
  		//localStorage.removeItem('categoryInfo');
  		this.actionBtn = 'Update';
  		this.actionNextBtn = 'Update & Next';
  		this.nextstep = true;
  	}
  	else if(this.activeRoute.snapshot.routeConfig.path == 'editproperty')
  		this.router.navigate(['/dashboard/manage-property/addproperty']);
  	this.getDropDownData();
  }

  /********************** Auto Load Drop Dwon List *********************/
  getDropDownData() {
  	var objectType = this;
  	this.propertyService.getAllDropDownData(function(err, response){  
  		  	
		objectType.showloading = false;
		if( err )
		  objectType.toastr.error("Something Going Wrong",null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true});
		if( response.statusCode == 200 ) {

			objectType.categoryListItem = response.data[0].data;
			objectType.conditionListItem = response.data[1].data;
			objectType.mortgageListItem = response.data[2].data;
			
		}
		else 
		  objectType.toastr.error(response.data.message,null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true}); 
	});
  }
  /********************** End Auto Load Drop Dwon List ******************/
  addProperty () {
	if( this.model.categoryId == '' || this.model.categoryId == undefined || this.model.name == '' || this.model.name == undefined || this.model.shortDesc == '' || this.model.shortDesc == undefined || this.model.minInvestPrice == '' || this.model.minInvestPrice == undefined || this.model.purchasePrice == '' || this.model.purchasePrice == undefined || this.model.maxInvestPrice == '' || this.model.maxInvestPrice == undefined) {
		
	  this.errorMsg = false;
	  return ;
	}
	this.errorMsg = true;
	this.showloading = true;
	var objectType = this;
	var nextStepAction = this.nextstep;
	
	if( this.model.propertyId > 0 ) 
		this.propertyService.updateProperty(this.model, function(err, response){    	
			objectType.showloading = false;
			if( err )
			  objectType.toastr.error("Something Going Wrong",null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true});
			if( response.statusCode == 200 ) {
				objectType.toastr.success(response.data.message,null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true});
				objectType.model = {catname: '', fcatname: '', grecatname: '', gcatname: '', categoryId: 0};
				localStorage.removeItem('propertyInfo');
			}
			else 
			  objectType.toastr.error(response.data.message,null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true}); 
		});
	else	
		this.propertyService.addProperty(this.model, function(err, response){   
			 	
			objectType.showloading = false;
			if( err )
			  objectType.toastr.error("Something Going Wrong",null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true});
			if( response.statusCode == 200 ) {
				objectType.toastr.success(response.data.message,null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true});
				objectType.model = {catname: '', fcatname: '', grecatname: '', gcatname: ''};
				let nextval = (nextStepAction == true) ? 'Yes' : 'No';
				localStorage.setItem("nextStep", nextval);
				localStorage.setItem("propertyId", response.data.data.propertyId);
				if( nextStepAction )
					objectType.router.navigate(['/dashboard/manage-property/addsummary']);
			}
			else 
			  objectType.toastr.error(response.data.message,null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true}); 
		});
  }
 
}
