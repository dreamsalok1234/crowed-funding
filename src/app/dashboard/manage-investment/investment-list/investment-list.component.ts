import { Component, OnInit, ViewChild, ViewEncapsulation, ElementRef, AfterViewInit, ViewContainerRef, Output } from '@angular/core';
import { state, style, transition, animate, trigger, AUTO_STYLE } from '@angular/animations';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { CommonService } from '../../../_services/admin/common.service';
import { InvestmentService } from '../../../_services/admin/investment.service';
@Component({
  selector: 'app-investment-list',
  templateUrl: './investment-list.component.html',
  styleUrls: ['./investment-list.component.css']
})
export class InvestmentListComponent implements OnInit {
  errorMsg = true;
  investmentList: any;
  showloading = false;
  constructor(private investmentService: InvestmentService, private commonService: CommonService, private toastr: ToastsManager, vcr: ViewContainerRef, private router: Router) { }


  ngOnInit() { this.InvestmentList(); }

  InvestmentList() {
    this.showloading = true;
    var objectType = this;
    this.investmentService.getInvestmentList(function (err, response) {
      debugger;
      objectType.showloading = false;
      if (err)
        objectType.toastr.error("Something Going Wrong", null, { autoDismiss: true, maxOpened: 1, preventDuplicates: true });
      if (response.statusCode == 200) {
        objectType.investmentList = response.data.data;
      }
      else
        objectType.toastr.error(response.data.message, null, { autoDismiss: true, maxOpened: 1, preventDuplicates: true });
    })
  }

}
