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
    this.rootLayout.headerOne = 'abut_header';
  }
  changePassword() {
    this.rootLayout.globalloader = false;
    var objectType = this;
    this.rootauthService.changePassword(this.model,function(err, response){
        this.rootLayout.globalloader = true;
        if( err )
          objectType.toastr.error("Something Going Wrong",null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true});
        if( response.statusCode == 200 ) {
            objectType.toastr.success(response.data.message,null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true});
            objectType.router.navigate(['/']);
        }
        else 
          objectType.toastr.error(response.data.message,null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true});
    })   
  }

}
