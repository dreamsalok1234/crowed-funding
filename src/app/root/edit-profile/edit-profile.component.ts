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
     this.rootLayout.headerOne = 'abut_header';
  	 this.getProfile();

  }

  getProfile() {
  	var profiledata = localStorage.getItem('profile') ? JSON.parse(localStorage.getItem('profile')) : {};
	this.model = profiledata;
  }

  updateProfile() {
    this.rootLayout.globalloader = false;
    var objectType = this;
    this.rootauthService.updateProfile(this.model,function(err, response){
        this.rootLayout.globalloader = true;
        if( err )
          objectType.toastr.error("Something Going Wrong",null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true});
        if( response.statusCode == 200 ) {
           this.toastr.success(this.responseItem.message,null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true});
            localStorage.setItem('profile', JSON.stringify(response.data.data));
        }
        else 
          objectType.toastr.error(response.data.message,null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true});
    })
  }



}
