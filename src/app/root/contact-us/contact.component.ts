import { Component, OnInit, ViewChild, ViewEncapsulation, ElementRef, AfterViewInit, ViewContainerRef } from '@angular/core';
import { state, style, transition, animate, trigger, AUTO_STYLE } from '@angular/animations';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { ContactService } from '../../_services/root/contact.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({  
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  model : any = {};
  loading = false;
  responseItem : any; 
  constructor(public toastr: ToastsManager, private contactService: ContactService, private router: Router, private modalService: NgbModal, vcr: ViewContainerRef) {
      this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
     
  }
  contactUs() {
    
  	this.contactService.contact(this.model).subscribe(
      data => {        
         try {
            this.responseItem  = data;
          }
          catch (error) {
            this.responseItem  = "Something Wrong";
          }          
          if( typeof(this.responseItem) == 'object') {             
            this.toastr.success(this.responseItem.message,null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true});
            
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
}
