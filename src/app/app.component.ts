import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  template: '<router-outlet><spinner></spinner></router-outlet>'
})
export class AppComponent {
  constructor(private router: Router) {
  	//if( localStorage.getItem('userAccessToken') == '' || localStorage.getItem('userAccessToken') == undefined )
  	this.router.navigate([window.location.pathname]);
  }

 	

}