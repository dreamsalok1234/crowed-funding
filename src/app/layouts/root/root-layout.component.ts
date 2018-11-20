import { Component, OnInit, ViewChild, ViewEncapsulation, ElementRef, AfterViewInit, ViewContainerRef } from '@angular/core';
import { state, style, transition, animate, trigger, AUTO_STYLE } from '@angular/animations';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { RootMenuItems } from '../../shared/root-menu-items/root-menu-items';
import { RootauthService } from '../../_services/root/rootauth.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import * as $ from 'jquery';

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
  SignUpArea = ( (localStorage.getItem('userAccessToken') == '' || localStorage.getItem('userAccessToken') == undefined) ) ? false : true;
  profileArea = ( localStorage.getItem('userAccessToken') != '' && localStorage.getItem('userAccessToken') != undefined) ? false : true;
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
    var objectType = this;
    this.authenticationService.signUpService(this.model, function(err, response){
      if( err )
          objectType.toastr.error("Something Going Wrong",null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true});
      if( response.statusCode == 200 ) {
          objectType.toastr.success(objectType.responseItem.message,null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true});
          objectType.router.navigate(['/']);
          objectType.signupModel.close();
      }
      else 
        objectType.toastr.error(response.data.message,null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true});
    });
    this.loading = false;
  }

  loginForm() {
    
    var objectType = this;
    this.authenticationService.login(this.model, function(err, response){
        if( err )
          objectType.toastr.error("Something Going Wrong",null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true});
        if( response.statusCode == 200 ) {
            debugger;
            objectType.responseItem = response.data;
            objectType.toastr.success(objectType.responseItem.message,null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true});
            localStorage.clear();
            localStorage.setItem('userAccessToken', objectType.responseItem.data.token);
            localStorage.setItem('role', 'user');
            localStorage.setItem('profile', JSON.stringify(objectType.responseItem.data.profile));
            objectType.userName = objectType.responseItem.data.profile.fullName
            objectType.router.navigate(['/']);
            objectType.profileArea = false;
            objectType.SignUpArea = true;
            objectType.model = {};
            objectType.loginModel.close();
        }
        else 
          objectType.toastr.error(response.data.message,null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true});
        
    });
      
  }

  logout() {

    var objectType = this;
    this.authenticationService.logout(function(err, response){
        if( err )
          objectType.toastr.error("Something Going Wrong",null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true});
        localStorage.removeItem('userAccessToken');
        localStorage.removeItem('role');
        localStorage.removeItem('profile');
        objectType.router.navigate(['/']);
        objectType.profileArea = true;
        objectType.SignUpArea = false;
        objectType.userName = '';
        objectType.toastr.success(response.data.message,null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true});
    })
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
    $(document).ready(function () {
      $('.navbar-light .navbar-toggler').click(function () {
        $(this).toggleClass('active');
        $('#navbarSupportedContent').slideToggle(700);  
      });
      if ($(window).width() <1024) {
        $('.navbar-collapse ul li a').click(function () {
          $(this).toggleClass('active');
          $('#navbarSupportedContent').slideToggle();
        });
      }	
     
    });

  }
  changeHeadeer(url){
    this.headerOne=(url=='home')?'':'abut_header';
  }

  handleUserSession(redirect = '', enablePopup = false) {
    localStorage.removeItem('userAccessToken');
    localStorage.removeItem('role');
    localStorage.removeItem('profile');
    this.profileArea = true;
    this.SignUpArea = false;
    this.userName = '';
    if( enablePopup )
      document.getElementById('signupBtn2').click();
    if( redirect != '' )      
      this.router.navigate([redirect]);
  }

  
}