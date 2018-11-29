import { Component, OnInit, ViewChild, ViewEncapsulation, ElementRef, AfterViewInit, ViewContainerRef, Output } from '@angular/core';
import { state, style, transition, animate, trigger, AUTO_STYLE } from '@angular/animations';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { PropertyService } from '../../../_services/admin/property.service';
import { CommonService } from '../../../_services/admin/common.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  
  errorMsg = true;
  propertyItemList: any;
  showloading = false;

  constructor(private propertyService: PropertyService, private commonService: CommonService, private toastr: ToastsManager, vcr: ViewContainerRef, private router: Router) { 
	this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  	this.propertyList();
  }
  propertyList() {
  	this.showloading = true;
  	var objectType = this;
  	this.propertyService.getProperty(function(err, response){ 
  		debugger;
  		objectType.showloading = false;
  		if( err )
  		  objectType.toastr.error("Something Going Wrong",null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true});
  		if( response.statusCode == 200 ) {
  			objectType.propertyItemList = response.data.data;
  		}
  		else 
  		  objectType.toastr.error(response.data.message,null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true}); 
  	})
  }

}
