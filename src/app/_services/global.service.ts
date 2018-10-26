import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class GlobalService {

    apiUrl = 'http://devv.website/crowdfund/apis/';
    responseItem : { data: any, statusCode: Number };
    constructor(private http: HttpClient, private newhttp: Http) { }

    callGetApi(apiname, accessToken = false) {
         var headers = new Headers();

        if(accessToken) {
            let authToken = localStorage.getItem('userAccessToken');
            headers.append('Authorization', `JWT ${authToken}`); 
        }

        let options = new RequestOptions({ headers: headers });
        return this.newhttp.get(this.apiUrl+apiname, options).map((user : Response) => {
                return user.json();
            });
    }

    callPostApi(apiname, parameter, accessToken = false) {

        var headers = new Headers();

        if(accessToken) {
            let authToken = localStorage.getItem('userAccessToken');
            headers.append('Authorization', `JWT ${authToken}`); 
        }

        let options = new RequestOptions({ headers: headers });      
        
        
        return this.newhttp.post(this.apiUrl+apiname, parameter, options).map((user : Response) => {
                return user.json();
            });
    }
}