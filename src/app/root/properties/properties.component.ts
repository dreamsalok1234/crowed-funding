import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../../_services/root/property.service';
import { RootLayoutComponent } from '../../layouts/root/root-layout.component';
@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {
  loading = false;
  responseItem : any; 
  propertyList : any;
  constructor(private propertyService: PropertyService, public rootLayoutComponent : RootLayoutComponent) { }
  ngOnInit() {
     this.getPropertyList();
     this.rootLayoutComponent.globalloader = false;
     this.rootLayoutComponent.headerOne = 'abut_header';
  }
  getPropertyList() {
  		this.propertyService.getProperty().subscribe(
	      data => {
	      	 this.rootLayoutComponent.globalloader = true;
	         try {
	            this.responseItem  = data;
	          }
	          catch (error) {
	            this.responseItem  = "Something Wrong";
	          }          
	          if( typeof(this.responseItem) == 'object') 
	          	    this.propertyList = data.data;

	      },
	      error => {
	          this.rootLayoutComponent.globalloader = true;
	          try {
	            this.responseItem  = JSON.parse(error._body);
	          }
	          catch (error) {
	            this.responseItem  = "Something Wrong";
	          }          
	          
	          this.loading = false;
	    });
  }
}
