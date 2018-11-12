import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GlobalService } from '../global.service';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    responseItem = { data: {}, statusCode: 200 };
    constructor(private http: HttpClient, public globalService: GlobalService) { }

    login(formdata, callback) {   
       return this.globalService.callPostApi('auth/login',{email : formdata.username, password: formdata.password}).subscribe(
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
                this.responseItem.data  = JSON.parse(error._body);
              }
              catch (err) {
                this.responseItem.data  = { message: "Something Wrong", status: false };
              }
              this.responseItem.statusCode = error.status;
              return callback(null, this.responseItem);
        });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}