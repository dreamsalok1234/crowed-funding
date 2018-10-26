import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { GlobalService } from '../global.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class PropertyService {
    //headers = new Headers();
    responseItem = { data: {}, statusCode: 200 };
    constructor(private http: HttpClient, private newhttp: Http, public globalService: GlobalService) { }

    getProperty(callback) {
        // remove user from local storage to log user out
        /*let authToken = localStorage.getItem('userAccessToken');
        var headers = new Headers({'Content-Type':  'application/json','Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Credentials':true,'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'});
        headers.append('Authorization', `JWT ${authToken}`);

        let options = new RequestOptions({ headers: headers });
        return this.newhttp.get('http://devv.website/crowdfund/apis/property/getProperty' ,options).map((data : Response) => {
                return data.json();
            });*/
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
                this.responseItem.data  = JSON.parse(error._body);
              }
              catch (err) {
                this.responseItem.data  = { message: "Something Wrong", status: false };
              }
              this.responseItem.statusCode = error.status;
              return callback(null, this.responseItem);
              
        });
    }
    getPropertyDetails(PropertyId, callback) {
        // remove user from local storage to log user out
        /*let authToken = localStorage.getItem('userAccessToken');
        var headers = new Headers({'Content-Type':  'application/json','Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Credentials':true,'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'});
        headers.append('Authorization', `JWT ${authToken}`);

        let options = new RequestOptions({ headers: headers });
        return this.newhttp.get('http://devv.website/crowdfund/apis/property/getProperty/'+PropertyId ,options).map((data : Response) => {
                return data.json();
            });*/
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
                this.responseItem.data  = JSON.parse(error._body);
              }
              catch (err) {
                this.responseItem.data  = { message: "Something Wrong", status: false };
              }
              this.responseItem.statusCode = error.status;
              return callback(null, this.responseItem);
              
        });
    }
    requestPropertyDocuments(PropertyId, callback) {
        // remove user from local storage to log user out
        /*let authToken = localStorage.getItem('userAccessToken');
        var headers = new Headers({'Content-Type':  'application/json','Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Credentials':true,'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'});
        headers.append('Authorization', `JWT ${authToken}`);

        let options = new RequestOptions({ headers: headers });
        return this.newhttp.post('http://devv.website/crowdfund/apis/property/requestFileDownload', {propertyId: PropertyId}, options).map((data : Response) => {
                return data.json();
            });*/
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
                this.responseItem.data  = JSON.parse(error._body);
              }
              catch (err) {
                this.responseItem.data  = { message: "Something Wrong", status: false };
              }
              this.responseItem.statusCode = error.status;
              return callback(null, this.responseItem);
              
        });
    }
}