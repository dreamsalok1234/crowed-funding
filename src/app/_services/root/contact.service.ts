import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class ContactService {
    //headers = new Headers();
    constructor(private http: HttpClient, private newhttp: Http) { }

    contact(formdata) {   
       var headers = new Headers({'Content-Type':  'application/json','Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Credentials':true,'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE','Access-Control-Allow-Headers':'Origin, X-Requested-With, Content-Type, Accept'});
       
       let options = new RequestOptions({ headers: headers });
        return this.newhttp.post('http://devv.website/crowdfund/apis/common/contact', { name: formdata.name, subject: formdata.subject, email: formdata.email, message: formdata.message }, options).map((user : Response)=> {
                return user.json();
            });
    }

    
}