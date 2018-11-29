import { Component, OnInit, ViewChild, AfterViewInit, ViewEncapsulation, ElementRef,  ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { state, style, transition, animate, trigger, AUTO_STYLE } from '@angular/animations';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { PropertyService } from '../../../_services/admin/property.service';

@Component({
  selector: 'app-addsummary',
  templateUrl: './add-summary.component.html',
  styleUrls: ['./add-summary.component.css']
})
export class AddSummaryComponent implements OnInit {
  summaryForm: FormGroup;
  viewMode = 'tab1';
  model:any = {summeryDesc: [], summeryDescFr: [], summeryDescGr: [], summeryDescIt: []};
  errorMsg = true;
  showloading = false;
  editItemData : any;
  actionBtn = 'Save';
  documentListItem : any;
  nextStepStatus = '';
  actionNextBtn = 'Save & Next';

  constructor(private propertyService: PropertyService, private toastr: ToastsManager, vcr: ViewContainerRef, private router: Router, private activeRoute: ActivatedRoute,private _fb: FormBuilder
  ) {
    this.toastr.setRootViewContainerRef(vcr);
    this.createForm();
  }
  createForm(){
    this.summaryForm = this._fb.group({
      itemRows: this._fb.array([])
    });
    this.summaryForm.setControl('itemRows', this._fb.array([]));
  }

  get itemRows(): FormArray {
    return this.summaryForm.get('itemRows') as FormArray;
  }

  

  ngOnInit(){
    if(localStorage.getItem('propertyId') != undefined &&  localStorage.getItem('propertyId') != '' &&  localStorage.getItem('propertyId') != null) {
      this.editItemData = localStorage.getItem('propertyId');
      this.nextStepStatus = (localStorage.getItem('nextStep') != undefined) ? localStorage.getItem('nextStep') : '';
      this.getPropertySummary(localStorage.getItem('propertyId'));
      this.summaryForm = this._fb.group({
        itemRows: this._fb.array([this.initItemRows()]) // here
      });
      
    }
    else 
      this.router.navigate(['/dashboard/manage-property/propertylist']);
    
  }
  initItemRows() {
      return this._fb.group({
          // list all your form controls here, which belongs to your form array
          itemname: [''],
          itemnameFr: [''],
          itemnameGr: [''],
          itemnameIt: ['']
      });
  }
  addNewRow() {
      // control refers to your formarray
      const control = <FormArray>this.summaryForm.controls['itemRows'];
      // add new formgroup
      control.push(this.initItemRows());
  }

  deleteRow(index: number) {
      // control refers to your formarray
      const control = <FormArray>this.summaryForm.controls['itemRows'];
      // remove the chosen row
      control.removeAt(index);
  }

  /********************** Property Document *********************/
  getPropertySummary(propertyId) {
    let objectType = this;
    this.propertyService.getPropertySummary(propertyId,function(err, response){  
    objectType.showloading = false;
    if( err )
      objectType.toastr.error("Something Going Wrong",null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true});
    if( response.statusCode == 200 ) {

      
      
    }
    else 
      objectType.toastr.error(response.data.message,null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true}); 
  });

  }
  addPropertySummary() {
    let formgroup = <FormArray>this.summaryForm.controls['itemRows']['controls'];
    
    for (let i = 0; i < formgroup.length; i++) {        
        this.model.summeryDesc.push(formgroup[i].controls.itemname.value);
        this.model.summeryDescFr.push(formgroup[i].controls.itemnameFr.value);
        this.model.summeryDescGr.push(formgroup[i].controls.itemnameGr.value);
        this.model.summeryDescIt.push(formgroup[i].controls.itemnameIt.value);
        
    }
    this.model.propertyId = localStorage.getItem('propertyId');
    if( this.model.propertyId > 0 ) {
        var objectType = this;
        this.model.summeryDesc = JSON.stringify(this.model.summeryDesc);
        this.model.summeryDescFr = JSON.stringify(this.model.summeryDescFr);
        this.model.summeryDescGr = JSON.stringify(this.model.summeryDescGr);
        this.model.summeryDescIt =JSON.stringify(this.model.summeryDescIt);
        debugger;
        this.propertyService.addSummery(this.model, function(err, response){
            debugger;
        });
    }
    else
      this.toastr.error("Something Going Wrong",null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true});
  }
  /********************** End Property Document ******************/
 
 
}
