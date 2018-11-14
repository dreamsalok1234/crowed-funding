import { Component, OnInit, ViewChild, ViewEncapsulation, ElementRef, AfterViewInit, ViewContainerRef } from '@angular/core';
import { state, style, transition, animate, trigger, AUTO_STYLE } from '@angular/animations';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { PropertyService } from '../../../_services/admin/property.service';

@Component({
  selector: 'app-addcat',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
	viewMode = 'tab1';
  model:any = {catname: '', fcatname: '', grecatname: '', gcatname: ''};
  errorMsg = true;
  constructor(private propertyService: PropertyService, private toastr: ToastsManager, vcr: ViewContainerRef, private router: Router) { 
	this.toastr.setRootViewContainerRef(vcr);
  }
	
  ngOnInit() {
  }
  addCategory () {
	if( this.model.catname == '') {
	  this.errorMsg = false;
	  return ;
	}
	this.errorMsg = true;
	var objectType = this;
	this.propertyService.addCategory(this.model, function(err, response){    	
		
		if( err )
		  objectType.toastr.error("Something Going Wrong",null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true});
		if( response.statusCode == 200 ) {
			objectType.toastr.success(response.data.message,null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true});
			objectType.model = {catname: '', fcatname: '', grecatname: '', gcatname: ''};
		}
		else 
		  objectType.toastr.error(response.data.message,null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true}); 
	})
  }
}
