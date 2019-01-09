import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { GlobalService } from '../global.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/forkJoin';

@Injectable()
export class UserService {
    //headers = new Headers();
    responseItem = { data: {}, statusCode: 200 };
    constructor(private http: HttpClient, private newhttp: Http, public globalService: GlobalService) { }

    getUserList(callback) {
        return this.globalService.callGetApi('user/getuser',true).subscribe(
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

    getContactList(callback) {
      return this.globalService.callGetApi('common/contactlist', true).subscribe(
        data => {
          try {
            this.responseItem.data = data;
          }
          catch (error) {
            this.responseItem.data = { message: "Something Went Wrong", status: false };
            this.responseItem.statusCode = 403;
          }
          return callback(null, this.responseItem);
        },
        error => {
          try {
            this.responseItem.data = JSON.parse(error.error);
          }
          catch (err) {
            this.responseItem.data = { message: "Something Went Wrong", status: false };
          }
          this.responseItem.statusCode = error.status;
          return callback(null, this.responseItem);

        });
    }

    searchUserList(keywords,callback) {
      return this.globalService.callGetApi('user/searchuser?search=' + keywords, true).subscribe(
        data => {
          try {
            this.responseItem.data = data;
          }
          catch (error) {
            this.responseItem.data = { message: "Something Went Wrong", status: false };
            this.responseItem.statusCode = 403;
          }
          return callback(null, this.responseItem);
        },
        error => {
          try {
            this.responseItem.data = JSON.parse(error.error);
          }
          catch (err) {
            this.responseItem.data = { message: "Something Went Wrong", status: false };
          }
          this.responseItem.statusCode = error.status;
          return callback(null, this.responseItem);

        });
    }
  }
