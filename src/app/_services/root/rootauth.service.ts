import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { GlobalService } from '../global.service';
import 'rxjs/add/operator/map'

@Injectable()
export class RootauthService {
    //headers = new Headers();
    responseItem = { data: {}, statusCode: 200 };
    constructor(private http: HttpClient, private newhttp: Http, private globalService: GlobalService) { }

    signUpService(formdata, callback) {   
       /*var headers = new Headers({'Content-Type':  'application/json','Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Credentials':true,'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'});

       let options = new RequestOptions({ headers: headers });
        return this.newhttp.post('http://devv.website/crowdfund/apis/auth/signup', { firstName: formdata.first_name, lastName: formdata.last_name, email: formdata.email, password: formdata.password, phoneNumber: formdata.phone }, options).map((user : Response)=> {
                return user.json();
            });*/
        return this.globalService.callPostApi('auth/signup',{ firstName: formdata.first_name, lastName: formdata.last_name, email: formdata.email, password: formdata.password, phoneNumber: formdata.phone }).subscribe(
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

    login(formdata, callback) {   
       return this.globalService.callPostApi('auth/login',{email : formdata.email, password: formdata.password}).subscribe(
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

    logout(callback) {
        // remove user from local storage to log user out
        /*let authToken = localStorage.getItem('userAccessToken');
        var headers = new Headers({'Content-Type':  'application/json','Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Credentials':true,'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'});
        headers.append('Authorization', `JWT ${authToken}`);

        let options = new RequestOptions({ headers: headers });
        return this.newhttp.get('http://devv.website/crowdfund/apis/auth/logout' ,options).map(user => {
                return user;
            });*/
        return this.globalService.callGetApi('auth/logout', true).subscribe(
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
    updateProfile(formdata, callback) {
        /*var headers = new Headers({'Content-Type':  'application/json','Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Credentials':true,'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'});
        let authToken = localStorage.getItem('userAccessToken');
        headers.append('Authorization', `JWT ${authToken}`);
       let options = new RequestOptions({ headers: headers });
        return this.newhttp.post('http://devv.website/crowdfund/apis/user/edit', { phoneNumber: formdata.phoneNumber, firstName: formdata.firstName, lastName: formdata.lastName, state: formdata.state, country: formdata.country, city: formdata.city, address: formdata.address, email : formdata.email }, options).map((user : Response) => {
                return user.json();
            });*/
        return this.globalService.callPostApi('user/edit',{ phoneNumber: formdata.phoneNumber, firstName: formdata.firstName, lastName: formdata.lastName, state: formdata.state, country: formdata.country, city: formdata.city, address: formdata.address, email : formdata.email }, true).subscribe(
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
    changePassword(formdata, callback) {
        /*var headers = new Headers({'Content-Type':  'application/json','Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Credentials':true,'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'});
        let authToken = localStorage.getItem('userAccessToken');
        headers.append('Authorization', `JWT ${authToken}`);
       let options = new RequestOptions({ headers: headers });
        return this.newhttp.post('http://devv.website/crowdfund/apis/auth/resetpassword', { newpassword: formdata.npassword, password: formdata.oldpassword }, options).map((user : Response) => {
                return user.json();
            });*/
        return this.globalService.callPostApi('auth/resetpassword',{ newpassword: formdata.npassword, password: formdata.oldpassword }, true).subscribe(
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