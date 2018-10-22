import { Component, OnInit, ViewContainerRef  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

//import { AlertService } from '../../../_services/index';

@Component({
  selector: 'app-with-social',
  templateUrl: './with-social.component.html'
})
export class WithSocialComponent implements OnInit {
	loading = false;
	model: any = {};

  constructor(public toastr: ToastsManager,vcr: ViewContainerRef, private router: Router) {
      this.toastr.setRootViewContainerRef(vcr);
   }

  ngOnInit() {
  	localStorage.removeItem('userAccessToken');
  }

  login() {
        this.loading = true;
        
        if( this.model.username == 'admin'  && this.model.password == 'admin') {
            localStorage.setItem('userAccessToken', "BDBDBBDDD");
            this.router.navigate(['/']);
            this.loading = false;
        }
        else {

        	  this.toastr.success('InValid username and password!',null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true});
            this.loading = false;
        }
        /*this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });*/
    }

}
