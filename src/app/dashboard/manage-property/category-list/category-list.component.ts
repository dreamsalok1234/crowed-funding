import { Component, OnInit, ViewChild, ViewEncapsulation, ElementRef, AfterViewInit, ViewContainerRef } from '@angular/core';
import { state, style, transition, animate, trigger, AUTO_STYLE } from '@angular/animations';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { PropertyService } from '../../../_services/admin/property.service';

@Component({
  selector: 'app-catlist',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  model:any = {catname: '', fcatname: '', grecatname: '', gcatname: ''};
  errorMsg = true;
  categoryList: any;
  constructor(private propertyService: PropertyService, private toastr: ToastsManager, vcr: ViewContainerRef) { 
	this.toastr.setRootViewContainerRef(vcr);
  }


  ngOnInit () { this.listCategory(); }

  listCategory () {
	var objectType = this;
	this.propertyService.getCategoryList(function(err, response){ 
		debugger;
		if( err )
		  objectType.toastr.error("Something Going Wrong",null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true});
		if( response.statusCode == 200 ) {
			objectType.categoryList = response.data.data;
		}
		else 
		  objectType.toastr.error(response.data.message,null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true}); 
	})
  }
  
}
