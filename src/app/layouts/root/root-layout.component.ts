import { Component, OnInit, ViewChild, ViewEncapsulation, ElementRef, AfterViewInit, ViewContainerRef } from '@angular/core';
import { state, style, transition, animate, trigger, AUTO_STYLE } from '@angular/animations';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { RootMenuItems } from '../../shared/root-menu-items/root-menu-items';
import { RootauthService } from '../../_services/root/rootauth.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  moduleId: module.id,
  selector: 'app-rootlayout',
  templateUrl: './root-layout.component.html',
  styleUrls: ['./root-layout.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class RootLayoutComponent implements OnInit {
  headerOne= '';
  loading = false;
  closeResult: string;
  model: any = {};
  signupModel : any;
  loginModel : any;
  emailExist = true;
  responseItem: any;
  userName : string;
  globalloader : boolean = true;
  SignUpArea = ( (localStorage.getItem('userAccessToken') == '' || localStorage.getItem('userAccessToken') == undefined) || (localStorage.getItem('role') != 'user' || localStorage.getItem('role') == undefined)) ? false : true;
  profileArea = ( localStorage.getItem('userAccessToken') != '' && localStorage.getItem('userAccessToken') != undefined &&  localStorage.getItem('role') == 'user' && localStorage.getItem('role') != undefined) ? false : true;
  constructor(public navItems: RootMenuItems, public toastr: ToastsManager, private authenticationService: RootauthService, private router: Router, private modalService: NgbModal, vcr: ViewContainerRef ) {
      this.toastr.setRootViewContainerRef(vcr);
      var profileData : any;
      profileData = localStorage.getItem('profile');
      if (profileData !='' && profileData != undefined) 
        profileData = JSON.parse(profileData);      
      this.userName = (profileData !='' && profileData != undefined) ? profileData.fullName : ''; 
  }

  open(content) {
    this.model = {};
    if (this.loginModel != undefined)  this.loginModel.close();
    this.signupModel = this.modalService.open(content);
    this.signupModel.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  ShowLoginPopUP(content) {
    this.model = {};
    if (this.signupModel != undefined)  this.signupModel.close();
    
    this.loginModel = this.modalService.open(content);
    this.loginModel.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  signUp() {

    this.authenticationService.signUpService(this.model).subscribe(
      data => {        
         try {
            this.responseItem  = data;
          }
          catch (error) {
            this.responseItem  = "Something Wrong";
          }          
          if( typeof(this.responseItem) == 'object') {             
            this.toastr.success(this.responseItem.message,null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true});
            this.router.navigate(['/']);
            this.signupModel.close();
          }
      },
      error => {
          
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
          this.loading = false;
    });
    this.loading = false;
  }

  loginForm() {
    
    this.authenticationService.login(this.model).subscribe(
      data  => {  
                  
         try {
            this.responseItem  = data;
          }
          catch (error) {
            this.responseItem  = "Something Wrong";
          }          
          if( typeof(this.responseItem) == 'object')  {           
            this.toastr.success(this.responseItem.message,null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true});
            localStorage.clear();
            localStorage.setItem('userAccessToken', this.responseItem.token);
            localStorage.setItem('role', 'user');
            localStorage.setItem('profile', JSON.stringify(this.responseItem.profile));
            this.userName = this.responseItem.profile.fullName
            this.router.navigate(['/']);
            this.profileArea = false;
            this.SignUpArea = true;
            this.model = {};
            this.loginModel.close();
          }
      },
      error => {
          
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
          this.loading = false;
    });
    this.loading = false;
  }

  logout() {
    
    this.authenticationService.logout().subscribe(
      data => {  
              
         try {
            this.responseItem  = data;
          }
          catch (error) {
            this.responseItem  = "Something Wrong";
          }          
          if( typeof(this.responseItem) == 'object')  { 
            localStorage.removeItem('userAccessToken');
            localStorage.removeItem('role');
            localStorage.removeItem('profile');
            this.router.navigate(['/']);
            this.profileArea = true;
            this.SignUpArea = false;
            this.userName = '';
            this.toastr.success("Successfully Logout",null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true});
          }
      },
      error => {
          
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
          this.loading = false;
    });
    this.loading = false;
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }



  ngOnInit() {        
    this.headerOne=(this.router.url=='/home')?'':'abut_header';

  }
  changeHeadeer(url){
    this.headerOne=(url=='home')?'':'abut_header';
  }

}