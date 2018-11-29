import { Component, OnInit, ViewChild, AfterViewInit, ViewEncapsulation, ElementRef,  ViewContainerRef } from '@angular/core';
import { state, style, transition, animate, trigger, AUTO_STYLE } from '@angular/animations';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { PropertyService } from '../../../_services/admin/property.service';

@Component({
  selector: 'app-uploadfile',
  templateUrl: './uploadfile.component.html',
  styleUrls: ['./uploadfile.component.css']
})
export class UploadFileComponent implements OnInit {
  viewMode = 'tab1';
  model:any = {};
  errorMsg = true;
  showloading = false;
  editItemData : any;
  actionBtn = 'Save';
  documentListItem : any;
 // @ViewChild(CategoryListComponent) categoryList;
  constructor(private propertyService: PropertyService, private toastr: ToastsManager, vcr: ViewContainerRef, private router: Router, private activeRoute: ActivatedRoute) { 
	this.toastr.setRootViewContainerRef(vcr);
  }
	
  ngOnInit() {

  	if(localStorage.getItem('propertyId') != undefined &&  localStorage.getItem('propertyId') != '' &&  localStorage.getItem('propertyId') != null) {
  		this.editItemData = localStorage.getItem('propertyId');
  		this.getPropertyDocuments(localStorage.getItem('propertyId'));
  		
  	}
  	else 
  		this.router.navigate(['/dashboard/manage-property/propertylist']);
  	
  }

  /********************** Property Document *********************/
  getPropertyDocuments(propertyId) {
  	var objectType = this;
  	this.propertyService.getPropertySummary(propertyId,function(err, response){  
  		debugger;
		objectType.showloading = false;
		if( err )
		  objectType.toastr.error("Something Going Wrong",null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true});
		if( response.statusCode == 200 ) {

			
			
		}
		else 
		  objectType.toastr.error(response.data.message,null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true}); 
	});
  }
  /********************** End Property Document ******************/
  
 
}
