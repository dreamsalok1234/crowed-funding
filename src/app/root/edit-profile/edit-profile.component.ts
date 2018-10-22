import { Component, OnInit,ViewChild, ViewEncapsulation, ElementRef, AfterViewInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { RootauthService } from '../../_services/root/rootauth.service';
import { RootLayoutComponent } from '../../layouts/root/root-layout.component';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
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
  	 this.getProfile();

  }

  getProfile() {
  	var profiledata = localStorage.getItem('profile') ? JSON.parse(localStorage.getItem('profile')) : {};
	this.model = profiledata;
  }

  updateProfile() {
  	this.rootLayout.globalloader = false;
  	this.rootauthService.updateProfile(this.model).subscribe(
      data => {        
      	
      	 this.rootLayout.globalloader = true;
         try {
            this.responseItem  = data;
          }
          catch (error) {
            this.responseItem  = "Something Wrong";
          }          
          if( typeof(this.responseItem) == 'object') {             
            this.toastr.success(this.responseItem.message,null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true});
            localStorage.setItem('profile', JSON.stringify(data.data));
            
          }
      },
      error => {
      	
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
