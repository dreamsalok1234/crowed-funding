import { Component, OnInit,ViewChild, ViewEncapsulation, ElementRef, AfterViewInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { RootauthService } from '../../_services/root/rootauth.service';
import { RootLayoutComponent } from '../../layouts/root/root-layout.component';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  model : any = {};
  responseItem: any;
  constructor(public rootLayout: RootLayoutComponent, public toastr: ToastsManager, private router: Router, private rootauthService: RootauthService) { }

  ngOnInit() {
  	if(localStorage.getItem('userAccessToken') == '' || localStorage.getItem('userAccessToken') == undefined) {
		localStorage.clear();
	    this.rootLayout.SignUpArea = false;
	    this.rootLayout.profileArea = true;
		this.router.navigate(['/']);

  	}
  }
  changePassword() {
  	this.rootLayout.globalloader = false;
  	this.rootauthService.changePassword(this.model).subscribe(
      data => {        
      		debugger;
      	 this.rootLayout.globalloader = true;
         try {
            this.responseItem  = data;
          }
          catch (error) {
            this.responseItem  = "Something Wrong";
          }          
          if( typeof(this.responseItem) == 'object') {             
            this.toastr.success(this.responseItem.message,null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true});
            this.router.navigate(['/']);
            
          }
      },
      error => {
      	debugger;
          this.rootLayout.globalloader = true;
          try {
            this.responseItem  = JSON.parse(error._body);
          }
          catch (error) {
            this.responseItem  = "Something Wrong";
          }          
          if( typeof(this.responseItem) == 'object')             
            this.toastr.error(this.responseItem.message,null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true});          
          else 
            this.toastr.error(this.responseItem,null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true});
    });
  }

}
