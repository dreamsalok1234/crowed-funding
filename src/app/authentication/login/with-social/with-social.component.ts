import { Component, OnInit, ViewContainerRef  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { AuthenticationService } from '../../../_services/admin/authentication.service';

@Component({
  selector: 'app-with-social',
  templateUrl: './with-social.component.html'
})
export class WithSocialComponent implements OnInit {
	loading = false;
	model: any = {};

  constructor(public toastr: ToastsManager,vcr: ViewContainerRef, private router: Router, public authenticationService: AuthenticationService) {
      this.toastr.setRootViewContainerRef(vcr);
   }

  ngOnInit() {
  	//localStorage.removeItem('userAccessToken');
  }

  login() {
        this.loading = true;
        var objectType = this;
        this.authenticationService.login(this.model, function(err, response){
            objectType.loading = false;
            if( err )
              objectType.toastr.error("Something Going Wrong",null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true});
            if( response.statusCode == 200 ) {
                
                localStorage.setItem("profile",JSON.stringify(response.data.profile));
                localStorage.setItem("userAccessToken",response.data.token);
                localStorage.setItem("roleId",response.data.roleId);
                if( response.data.roleId == 1 ) {
                  localStorage.setItem("role","admin");
                  objectType.router.navigate(['/dashboard']);
                }
                else if( response.data.roleId == 2 ) {
                  localStorage.setItem("role","user");
                  objectType.router.navigate(['/']); 
                }
            }
            else 
              objectType.toastr.error(response.data.message,null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true});
        });
    }

}
