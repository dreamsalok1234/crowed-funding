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
       var headers = new Headers({'Content-Type':  'application/json'});

       let options = new RequestOptions({ headers: headers });
        return this.newhttp.post('http://devv.website/crowdfund/apis/common/contact', { name: formdata.name, subject: formdata.subject, email: formdata.email, message: formdata.message }, options).map((user : Response)=> {
                return user.json();
            });
    }

    
}