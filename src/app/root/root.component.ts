import { Component, OnInit, ViewChild, ViewEncapsulation, ElementRef, AfterViewInit, ViewContainerRef } from '@angular/core';
import { state, style, transition, animate, trigger, AUTO_STYLE } from '@angular/animations';
import { Router, ActivatedRoute } from '@angular/router';
import { PropertyService } from '../_services/root/property.service';
import { RootLayoutComponent } from '../layouts/root/root-layout.component';
@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {
  model : any = {};
  loading = false;
  responseItem : any; 
  propertyList : any;
  constructor(private propertyService: PropertyService, private router: Router, public rootLayout: RootLayoutComponent) {
      this.rootLayout.headerOne = '';
  }

  ngOnInit() {
  	this.getProperty();
  }
  getProperty() {
    var objectType = this;
    this.propertyService.getProperty(function(err, response) {
      if( response.statusCode == 200 ) 
          objectType.propertyList = response.data.data;
    })
    
  }

}
