import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { GlobalService } from '../global.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class ContactService {
    //headers = new Headers();
    responseItem = { data: {}, statusCode: 200 };
    constructor(private http: HttpClient, private newhttp: Http, public globalService: GlobalService) { }

    contact(formdata, callback) {   
      /* var headers = new Headers({'Content-Type':  'application/json','Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Credentials':true,'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'});
       
       let options = new RequestOptions({ headers: headers });
        return this.newhttp.post('http://devv.website/crowdfund/apis/common/contact', { name: formdata.name, subject: formdata.subject, email: formdata.email, message: formdata.message }, options).map((user : Response)=> {
                return user.json();
            });*/
       	return this.globalService.callPostApi('property/requestFileDownload',{ name: formdata.name, subject: formdata.subject, email: formdata.email, message: formdata.message }).subscribe(
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