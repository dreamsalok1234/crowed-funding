import { Component, OnInit, ViewChild, AfterViewInit, ViewEncapsulation, ElementRef,  ViewContainerRef } from '@angular/core';
import { state, style, transition, animate, trigger, AUTO_STYLE } from '@angular/animations';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { PropertyService } from '../../../_services/admin/property.service';
import { MortgageListComponent } from "../mortgage-list/mortgage-list.component";

@Component({
  selector: 'app-addcat',
  templateUrl: './add-mortage.component.html',
  styleUrls: ['./add-mortage.component.css'],
  providers: [MortgageListComponent]
})
export class AddMortageComponent implements OnInit {
  viewMode = 'tab1';
  model:any = {mnumber: '', mamount: '', minvestyear: '', mduration: '', mortgageId: 0};
  errorMsg = true;
  showloading = false;
  editItemData : any;
  actionBtn = 'Save Mortgage';
 // @ViewChild(CategoryListComponent) categoryList;
  constructor(private propertyService: PropertyService, private toastr: ToastsManager, vcr: ViewContainerRef, private router: Router, private activeRoute: ActivatedRoute) { 
	this.toastr.setRootViewContainerRef(vcr);
  }
	
  ngOnInit() {

  	if(this.activeRoute.snapshot.routeConfig.path !== 'editmortgage')
  		localStorage.removeItem('mortgageInfo');
  	if(localStorage.getItem('mortgageInfo') != undefined &&  localStorage.getItem('mortgageInfo') != '' &&  localStorage.getItem('mortgageInfo') != null) {
  		this.editItemData = JSON.parse(localStorage.getItem('mortgageInfo'));
  		this.model.mnumber = this.editItemData.mortgageNumber;
  		this.model.mamount = this.editItemData.mortgageAmount;
  		this.model.minvestyear = this.editItemData.mortgageInterestPer;
  		this.model.mduration = this.editItemData.mortgageYear;
  		this.model.mortgageId = this.editItemData.mortgageId;
  		this.actionBtn = 'Update Mortgage';
  	}
  	else if(this.activeRoute.snapshot.routeConfig.path == 'editmortgage')
  		this.router.navigate(['/dashboard/manage-mortgage/addmortage']);
  }
  addMortgage () {
	if( this.model.mamount == '' || this.model.minvestyear == '' || this.model.mduration == '') {
	  this.errorMsg = false;
	  return ;
	}
	this.errorMsg = true;
	this.showloading = true;
	var objectType = this;
	debugger;
	if( this.model.mortgageId > 0 ) 
		this.propertyService.updateMortgage(this.model, function(err, response){    	
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
		this.propertyService.addMortgage(this.model, function(err, response){    	
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
