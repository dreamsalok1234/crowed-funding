import { Component, OnInit, ViewChild, ViewEncapsulation, ElementRef, AfterViewInit, ViewContainerRef } from '@angular/core';
import { state, style, transition, animate, trigger, AUTO_STYLE } from '@angular/animations';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { ContactService } from '../../_services/root/contact.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { RootLayoutComponent } from '../../layouts/root/root-layout.component';

@Component({  
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  model : any = {};
  loading = false;
  responseItem : any; 
  constructor(public toastr: ToastsManager, private contactService: ContactService, public rootLayout: RootLayoutComponent, private router: Router, private modalService: NgbModal, vcr: ViewContainerRef) {
      this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
     this.rootLayout.headerOne = 'abut_header';
  }
  contactUs() {
    this.rootLayout.globalloader = false;
    var objectType = this;
    this.contactService.contact(this.model,function(err, response){
        this.rootLayout.globalloader = true;
        if( err )
          objectType.toastr.error("Something Going Wrong",null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true});
        if( response.statusCode == 200 ) 
            objectType.toastr.success(response.data.message,null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true});
        else 
          objectType.toastr.error(response.data.message,null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true});
    })
  }
}
