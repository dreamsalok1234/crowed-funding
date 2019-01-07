import { Component, OnInit, ViewChild, AfterViewInit, ViewEncapsulation, ElementRef,  ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { state, style, transition, animate, trigger, AUTO_STYLE } from '@angular/animations';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { PropertyService } from '../../../_services/admin/property.service';

@Component({
  selector: 'app-uploadimage',
  templateUrl: './uploadimage.component.html',
  styleUrls: ['./uploadimage.component.css']
})
export class UploadImageComponent implements OnInit {
  viewMode = 'tab1';
  fileForm: FormGroup;
  model:any = {};
  formdataItem = [];
  errorMsg = true;
  showloading = false;
  editItemData : any;
  actionBtn = 'Save';
  documentListItem : any;
 // @ViewChild(CategoryListComponent) categoryList;
 @ViewChild('fileInput') fileInput: ElementRef;
  constructor(private propertyService: PropertyService, private toastr: ToastsManager, vcr: ViewContainerRef, private router: Router, private activeRoute: ActivatedRoute,private _fb: FormBuilder) { 
	  this.toastr.setRootViewContainerRef(vcr);
    this.createForm();
  }
	

  createForm(){
    this.fileForm = this._fb.group({
      itemRows: this._fb.array([])
    });
    this.fileForm.setControl('itemRows', this._fb.array([]));
  }

  get itemRows(): FormArray {
    return this.fileForm.get('itemRows') as FormArray;
  }

  ngOnInit() {

  	if(localStorage.getItem('propertyId') != undefined &&  localStorage.getItem('propertyId') != '' &&  localStorage.getItem('propertyId') != null) {
  		this.editItemData = localStorage.getItem('propertyId');
  		this.getPropertyImages(localStorage.getItem('propertyId'));
  		
  	}
  	else 
  		this.router.navigate(['/dashboard/manage-property/propertylist']);
  	
  }


  initItemRows() {
      return this._fb.group({
          // list all your form controls here, which belongs to your form array
          itemname: ['']
      });
  }
  setItemRowsData(itemsData) {
      return this._fb.group({
          // list all your form controls here, which belongs to your form array
          itemname: [itemsData]     
      });
  }
  addNewRow() {
      // control refers to your formarray
      const control = <FormArray>this.fileForm.controls['itemRows'];
      // add new formgroup
      control.push(this.initItemRows());
  }

  deleteRow(index: number) {
      // control refers to your formarray
      const control = <FormArray>this.fileForm.controls['itemRows'];
      // remove the chosen row
      control.removeAt(index);
      this.formdataItem.splice(index,1);
  }

  /********************** Property Images *********************/
  getPropertyImages(propertyId) {
  	var objectType = this;
  	this.propertyService.getPropertyImage(propertyId,function(err, response){  
  		debugger;
  		objectType.showloading = false;
  		if( err )
  		  objectType.toastr.error("Something Going Wrong",null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true});
  		if( response.statusCode == 200 ) {
          if(response.data.data["imageList"].length > 0 ) 
            for (let i = 0; i < response.data.data["imageList"].length; i++ ) {
              // control refers to your formarray
              const controls = <FormArray>objectType.fileForm.controls['itemRows'];
              // add new formgroup
              controls.push(objectType.setItemRowsData(response.data.data["imageList"][i]));
              
            }      
          else
              objectType.addNewRow();
  			
  			
  		}
  		else {
  		  objectType.toastr.error(response.data.message,null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true}); 
        objectType.addNewRow();
      }
  	});
  }
  /********************** End Property Document ******************/


  onFileChange(event, index) {
    var reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      var file = event.target.files[0];
      reader.readAsDataURL(file);
      var objectType =this;
      reader.onload = () => {
        
        if(file.type=="image/png" || file.type=="image/jpeg" || file.type=="image/jpg") {
          objectType.formdataItem[index] = file;
        }
        debugger;
        
        
        /*this.fileForm.get('itemname').setValue({
          filename: file.name,
          filetype: file.type,
          value: reader.result
        })*/
      };
    }
    
  }
  
 
}
