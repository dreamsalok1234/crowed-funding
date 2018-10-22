import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BusinessComponent implements OnInit {
  isFirstOpen: boolean = true;
  constructor() { }
  viewMode = 'tab1'
  ngOnInit() {
     
  }

}
