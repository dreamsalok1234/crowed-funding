import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { GlobalService } from '../global.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/forkJoin';

@Injectable()
export class PropertyService {
    //headers = new Headers();
    responseItem = { data: {}, statusCode: 200 };
    constructor(private http: HttpClient, private newhttp: Http, public globalService: GlobalService) { }

    getProperty(callback) {
        return this.globalService.callGetApi('property/getProperty').subscribe(
          data  => {  
              try {
                this.responseItem.data  = data;
              }
              catch (error) {
                this.responseItem.data  = {message: "Something Wrong", status: false};
                this.responseItem.statusCode = 403;
              } 
              return callback(null, this.responseItem);             
          },
          error => {              
              try {                 
                this.responseItem.data  = JSON.parse(error.error);
              }
              catch (err) {
                this.responseItem.data  = { message: "Something Wrong", status: false };
              }
              this.responseItem.statusCode = error.status;
              return callback(null, this.responseItem);
              
        });
    }
    addCategory(formdata, callback) {
        
        return this.globalService.callPostApi('property/addUpdatePropertyCategory',{ name: formdata.catname, nameFr: formdata.fcatname, nameGr: formdata.grecatname, nameIt: formdata.gcatname}, true).subscribe(
          data  => {  
              try {
                this.responseItem.data  = data;
              }
              catch (error) {
                this.responseItem.data  = {message: "Something Wrong", status: false};
                this.responseItem.statusCode = 403;
              } 
              return callback(null, this.responseItem);             
          },
          error => {               
              try {                 
                this.responseItem.data  = JSON.parse(error.error);
              }
              catch (err) {
                this.responseItem.data  = { message: "Something Wrong", status: false };
              }
              this.responseItem.statusCode = error.status;
              return callback(null, this.responseItem);
              
        });
    }

    updateCategory(formdata, callback) {
        return this.globalService.callPostApi('property/addUpdatePropertyCategory',{ name: formdata.catname, nameFr: formdata.fcatname, nameGr: formdata.grecatname, nameIt: formdata.gcatname, categoryId: formdata.categoryId}, true).subscribe(
          data  => {  
              try {
                this.responseItem.data  = data;
              }
              catch (error) {
                this.responseItem.data  = {message: "Something Wrong", status: false};
                this.responseItem.statusCode = 403;
              } 
              return callback(null, this.responseItem);             
          },
          error => {              
              try {                 
                this.responseItem.data  = JSON.parse(error.error);
              }
              catch (err) {
                this.responseItem.data  = { message: "Something Wrong", status: false };
              }
              this.responseItem.statusCode = error.status;
              return callback(null, this.responseItem);
              
        });
    }


    /************************** Conditions Section ****************************/

    addConditions(formdata, callback) {
        
        return this.globalService.callPostApi('property/addUpdatePropertyCondition',{ condition: formdata.catname, conditionFr: formdata.fcatname, conditionGr: formdata.grecatname, conditionIt: formdata.gcatname}, true).subscribe(
          data  => {  
              try {
                this.responseItem.data  = data;
              }
              catch (error) {
                this.responseItem.data  = {message: "Something Wrong", status: false};
                this.responseItem.statusCode = 403;
              } 
              return callback(null, this.responseItem);             
          },
          error => {               
              try {                 
                this.responseItem.data  = JSON.parse(error.error);
              }
              catch (err) {
                this.responseItem.data  = { message: "Something Wrong", status: false };
              }
              this.responseItem.statusCode = error.status;
              return callback(null, this.responseItem);
              
        });
    }

    updateConditions(formdata, callback) {
        return this.globalService.callPostApi('property/addUpdatePropertyCondition',{ condition: formdata.catname, conditionFr: formdata.fcatname, conditionGr: formdata.grecatname, conditionIt: formdata.gcatname, conditionId: formdata.categoryId}, true).subscribe(
          data  => { 
               
              try {
                this.responseItem.data  = data;
              }
              catch (error) {
                this.responseItem.data  = {message: "Something Wrong", status: false};
                this.responseItem.statusCode = 403;
              } 
              return callback(null, this.responseItem);             
          },
          error => { 
                            
              try {                 
                this.responseItem.data  = JSON.parse(error.error);
              }
              catch (err) {
                this.responseItem.data  = { message: "Something Wrong", status: false };
              }
              this.responseItem.statusCode = error.status;
              return callback(null, this.responseItem);
              
        });
    }

    getConditionsList(callback) {
        return this.globalService.callGetApi('property/getPropertyCondition', true).subscribe(
          data  => {  
              try {
                this.responseItem.data  = data;
              }
              catch (error) {
                this.responseItem.data  = {message: "Something Wrong", status: false};
                this.responseItem.statusCode = 403;
              } 
              return callback(null, this.responseItem);             
          },
          error => {              
              try {                 
                this.responseItem.data  = JSON.parse(error.error);
              }
              catch (err) {
                this.responseItem.data  = { message: "Something Wrong", status: false };
              }
              this.responseItem.statusCode = error.status;
              return callback(null, this.responseItem);
              
        });
    }

    /************************** End Conditions Section ************************/


    /************************** Mortgage Section ****************************/

    addMortgage(formdata, callback) {
        
        return this.globalService.callPostApi('property/addUpdateMortgage',{ mortgageNumber: formdata.mnumber, mortgageAmount: formdata.mamount, mortgageInterestPer: formdata.minvestyear, mortgageYear: formdata.mduration}, true).subscribe(
          data  => {  
              try {
                this.responseItem.data  = data;
              }
              catch (error) {
                this.responseItem.data  = {message: "Something Wrong", status: false};
                this.responseItem.statusCode = 403;
              } 
              return callback(null, this.responseItem);             
          },
          error => {               
              try {                 
                this.responseItem.data  = JSON.parse(error.error);
              }
              catch (err) {
                this.responseItem.data  = { message: "Something Wrong", status: false };
              }
              this.responseItem.statusCode = error.status;
              return callback(null, this.responseItem);
              
        });
    }

    updateMortgage(formdata, callback) {
        return this.globalService.callPostApi('property/addUpdateMortgage',{ mortgageNumber: formdata.mnumber, mortgageAmount: formdata.mamount, mortgageInterestPer: formdata.minvestyear, mortgageYear: formdata.mduration, mortgageId: formdata.mortgageId}, true).subscribe(
          data  => { 
               
              try {
                this.responseItem.data  = data;
              }
              catch (error) {
                this.responseItem.data  = {message: "Something Wrong", status: false};
                this.responseItem.statusCode = 403;
              } 
              return callback(null, this.responseItem);             
          },
          error => { 
                            
              try {                 
                this.responseItem.data  = JSON.parse(error.error);
              }
              catch (err) {
                this.responseItem.data  = { message: "Something Wrong", status: false };
              }
              this.responseItem.statusCode = error.status;
              return callback(null, this.responseItem);
              
        });
    }

    getMortgageList(callback) {
        return this.globalService.callGetApi('property/getMortgage', true).subscribe(
          data  => {  
              try {
                this.responseItem.data  = data;
              }
              catch (error) {
                this.responseItem.data  = {message: "Something Wrong", status: false};
                this.responseItem.statusCode = 403;
              } 
              return callback(null, this.responseItem);             
          },
          error => {              
              try {                 
                this.responseItem.data  = JSON.parse(error.error);
              }
              catch (err) {
                this.responseItem.data  = { message: "Something Wrong", status: false };
              }
              this.responseItem.statusCode = error.status;
              return callback(null, this.responseItem);
              
        });
    }

    /************************** End Mortgage Section ************************/



    /************************** Category List *********************************/
    getCategoryList(callback) {
        return this.globalService.callGetApi('property/getPropertyCategory', true).subscribe(
          data  => {  
              try {
                this.responseItem.data  = data;
              }
              catch (error) {
                this.responseItem.data  = {message: "Something Wrong", status: false};
                this.responseItem.statusCode = 403;
              } 
              return callback(null, this.responseItem);             
          },
          error => {              
              try {                 
                this.responseItem.data  = JSON.parse(error.error);
              }
              catch (err) {
                this.responseItem.data  = { message: "Something Wrong", status: false };
              }
              this.responseItem.statusCode = error.status;
              return callback(null, this.responseItem);
              
        });
    }
    getPropertyDetails(PropertyId, callback) {
        
        return this.globalService.callGetApi('property/getProperty/'+PropertyId).subscribe(
          data  => {  
              try {
                this.responseItem.data  = data;
              }
              catch (error) {
                this.responseItem.data  = {message: "Something Wrong", status: false};
                this.responseItem.statusCode = 403;
              } 
              return callback(null, this.responseItem);             
          },
          error => {              
              try {                 
                this.responseItem.data  = JSON.parse(error.error);
              }
              catch (err) {
                this.responseItem.data  = { message: "Something Wrong", status: false };
              }
              this.responseItem.statusCode = error.status;
              return callback(null, this.responseItem);
              
        });
    }
    requestPropertyDocuments(PropertyId, callback) {
        
        return this.globalService.callPostApi('property/requestFileDownload',{ propertyId: PropertyId}, true).subscribe(
          data  => {  
              try {
                this.responseItem.data  = data;
              }
              catch (error) {
                this.responseItem.data  = {message: "Something Wrong", status: false};
                this.responseItem.statusCode = 403;
              } 
              return callback(null, this.responseItem);             
          },
          error => {              
              try {                 
                this.responseItem.data  = JSON.parse(error.error);
              }
              catch (err) {
                this.responseItem.data  = { message: "Something Wrong", status: false };
              }
              this.responseItem.statusCode = error.status;
              return callback(null, this.responseItem);
              
        });
    }


    /***************************** Add/List Property Section ********************/
    getAllDropDownData(callback) {
      let categoryListAPI = this.globalService.callGetApi('property/getPropertyCategory', true);
      let conditionListAPI = this.globalService.callGetApi('property/getPropertyCondition', true);
      let mortgageListAPI = this.globalService.callGetApi('property/getMortgage', true);
      return this.requestDataFromMultipleSources([categoryListAPI, conditionListAPI, mortgageListAPI]).subscribe(
          data  => {  
              
              try {
                this.responseItem.data  = data;
              }
              catch (error) {
                this.responseItem.data  = {message: "Something Wrong", status: false};
                this.responseItem.statusCode = 403;
              } 
              return callback(null, this.responseItem);             
          },
          error => { 
                           
              try {                 
                this.responseItem.data  = JSON.parse(error.error);
              }
              catch (err) {
                this.responseItem.data  = { message: "Something Wrong", status: false };
              }
              this.responseItem.statusCode = error.status;
              return callback(null, this.responseItem);
              
        });
    }
    public requestDataFromMultipleSources(apiList): Observable<any[]> {
      return Observable.forkJoin(apiList);
    }

    addProperty(formdata, callback) {
      return this.globalService.callPostApi('property/addUpdateProperty', formdata , true).subscribe(
          data  => { 
               
              try {
                this.responseItem.data  = data;
              }
              catch (error) {
                this.responseItem.data  = {message: "Something Wrong", status: false};
                this.responseItem.statusCode = 403;
              } 
              return callback(null, this.responseItem);             
          },
          error => { 
                            
              try {                 
                this.responseItem.data  = JSON.parse(error.error);
              }
              catch (err) {
                this.responseItem.data  = { message: "Something Wrong", status: false };
              }
              this.responseItem.statusCode = error.status;
              return callback(null, this.responseItem);
              
        });
    }
    
    updateProperty(formdata, callback) {
      return this.globalService.callPostApi('property/addUpdateProperty', formdata , true).subscribe(
          data  => { 
               
              try {
                this.responseItem.data  = data;
              }
              catch (error) {
                this.responseItem.data  = {message: "Something Wrong", status: false};
                this.responseItem.statusCode = 403;
              } 
              return callback(null, this.responseItem);             
          },
          error => { 
                            
              try {                 
                this.responseItem.data  = JSON.parse(error.error);
              }
              catch (err) {
                this.responseItem.data  = { message: "Something Wrong", status: false };
              }
              this.responseItem.statusCode = error.status;
              return callback(null, this.responseItem);
              
        });
    }
    /***************************** End Property Section *************************/
    /***************************** Property Documents ***************************/
    getPropertyDocument(propertyId, callback) {
       return this.globalService.callGetApi('property/getPropertyDocument/'+propertyId, true).subscribe(
          data  => { 
              try {
                this.responseItem.data  = data;
              }
              catch (error) {
                this.responseItem.data  = {message: "Something Wrong", status: false};
                this.responseItem.statusCode = 403;
              } 
              return callback(null, this.responseItem);             
          },
          error => {             
              try {                 
                this.responseItem.data  = JSON.parse(error.error);
              }
              catch (err) {
                this.responseItem.data  = { message: "Something Wrong", status: false };
              }
              this.responseItem.statusCode = error.status;
              return callback(null, this.responseItem);
              
        }); 
    }

    /***************************** End Property Documents ***********************/

    /***************************** Property Summary ***************************/
    getPropertySummary(propertyId, callback) {

       return this.globalService.callGetApi('property/getPropertySummaryList/'+propertyId, true).subscribe(
          data  => { 
              
              try {
                this.responseItem.data  = data;
              }
              catch (error) {
                this.responseItem.data  = {message: "Something Wrong", status: false};
                this.responseItem.statusCode = 403;
              } 
              return callback(null, this.responseItem);             
          },
          error => { 
                            
              try {                 
                this.responseItem.data  = JSON.parse(error.error);
              }
              catch (err) {
                this.responseItem.data  = { message: "Something Wrong", status: false };
              }
              this.responseItem.statusCode = error.status;
              return callback(null, this.responseItem);
              
        }); 
    }

    addSummery(formdata, callback) {
      return this.globalService.callPostApi('property/addUpdatePropertySummary', formdata , true).subscribe(
          data  => { 
              debugger; 
              try {
                this.responseItem.data  = data;
              }
              catch (error) {
                this.responseItem.data  = {message: "Something Wrong", status: false};
                this.responseItem.statusCode = 403;
              } 
              return callback(null, this.responseItem);             
          },
          error => { 
              debugger;              
              try {                 
                this.responseItem.data  = JSON.parse(error.error);
              }
              catch (err) {
                this.responseItem.data  = { message: "Something Wrong", status: false };
              }
              this.responseItem.statusCode = error.status;
              return callback(null, this.responseItem);
              
        });
    }

    /***************************** End Property Summary ***********************/
}