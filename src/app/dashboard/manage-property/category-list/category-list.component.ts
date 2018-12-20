import { Component, OnInit, ViewChild, ViewEncapsulation, ElementRef, AfterViewInit, ViewContainerRef, Output } from '@angular/core';
import { state, style, transition, animate, trigger, AUTO_STYLE } from '@angular/animations';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { PropertyService } from '../../../_services/admin/property.service';
import { CommonService } from '../../../_services/admin/common.service';

@Component({
	selector: 'app-catlist',
	templateUrl: './category-list.component.html',
	styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
	model: any = { catname: '', fcatname: '', grecatname: '', gcatname: '' };
	errorMsg = true;
	categoryList: any;
	showloading = false;
	public categoryItem: any;
	categoryId = 0;
	//@Output() messageEvent = new EventEmitter<string>();
	constructor(private propertyService: PropertyService, private commonService: CommonService, private toastr: ToastsManager, vcr: ViewContainerRef, private router: Router) {
		this.toastr.setRootViewContainerRef(vcr);
	}


	ngOnInit() { this.listCategory(); }

	listCategory() {
		this.showloading = true;
		var objectType = this;
		this.propertyService.getCategoryList(function (err, response) {
			debugger;
			objectType.showloading = false;
			if (err)
				objectType.toastr.error("Something Going Wrong", null, { autoDismiss: true, maxOpened: 1, preventDuplicates: true });
			if (response.statusCode == 200) {
				objectType.categoryList = response.data.data;
			}
			else
				objectType.toastr.error(response.data.message, null, { autoDismiss: true, maxOpened: 1, preventDuplicates: true });
		})
	}

	DeleteCategory(catId, rowIndex) {
		if (confirm("Are You Sure To Delete ")) {
			this.showloading = true;
			var objectType = this;
			this.commonService.deleteItem({ catId: catId, tab: 'propertycategory' }, function (err, response) {
				objectType.showloading = false;
				if (err)
					objectType.toastr.error("Something Going Wrong", null, { autoDismiss: true, maxOpened: 1, preventDuplicates: true });
				if (response.statusCode == 200) {
					objectType.categoryList.splice(rowIndex, 1);
					objectType.toastr.success("Category Deleted Successfully", null, { autoDismiss: true, maxOpened: 1, preventDuplicates: true });
				}
				else
					objectType.toastr.error(response.data.message, null, { autoDismiss: true, maxOpened: 1, preventDuplicates: true });
			})
		}
	}

	ChangeCategoryStatus(catId, rowIndex) {
		if (confirm("Are You Sure To Change Status ")) {
			this.showloading = true;
			var objectType = this;
			var statusVal = this.categoryList[rowIndex].status == 0 ? 1 : 0;

			this.commonService.updateItemStatus({ catId: catId, tab: 'propertycategory', status: statusVal }, function (err, response) {

				objectType.showloading = false;
				if (err)
					objectType.toastr.error("Something Going Wrong", null, { autoDismiss: true, maxOpened: 1, preventDuplicates: true });
				if (response.statusCode == 200) {
					objectType.categoryList[rowIndex].status = statusVal;
					objectType.toastr.success(response.data.message, null, { autoDismiss: true, maxOpened: 1, preventDuplicates: true });
				}
				else
					objectType.toastr.error(response.data.message, null, { autoDismiss: true, maxOpened: 1, preventDuplicates: true });
			})
		}
	}

	EditCategory(catId, rowIndex) {
		localStorage.setItem("categoryInfo", JSON.stringify(this.categoryList[rowIndex]));
		//this.messageEvent.emit(this.categoryList[rowIndex]);
		this.router.navigate(['/dashboard/manage-property/editcategory']);
	}

}