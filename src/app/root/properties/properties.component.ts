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
  		var objectType = this;
  		this.propertyService.getProperty(function(err, response){
	        objectType.rootLayoutComponent.globalloader = true;
	        
	        if( response.statusCode == 200 ) 
	            objectType.propertyList = response.data.data;
	    });    
  }
}
