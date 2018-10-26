import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class GlobalService {

    apiUrl = 'http://devv.website/crowdfund/apis/';
    constructor(private http: HttpClient, private newhttp: Http) { }

    callGetApi(apiname, accessToken = false) {
        let httpHeaders = new HttpHeaders()
         .set('Content-Type', 'application/json')
         .set('Cache-Control', 'no-cache');
        if(accessToken) {
            let authToken = localStorage.getItem('userAccessToken');
            httpHeaders.append('Authorization',`JWT ${authToken}`);  
        }
        let options = {
            headers: httpHeaders
         };
        return this.http.get('http://devv.website/crowdfund/apis'+this.apiUrl, options).map((user : Response) => {
                return user;
            });
    }

    callPostApi(apiname, parameter, accessToken = false) {
        let httpHeaders = new HttpHeaders()
         .set('Content-Type', 'application/json')
         .set('Cache-Control', 'no-cache');
        if(accessToken) {
            let authToken = localStorage.getItem('userAccessToken');
            httpHeaders.append('Authorization',`JWT ${authToken}`);  
        }
        let options = {
            headers: httpHeaders
         };
        return this.http.post('http://devv.website/crowdfund/apis'+this.apiUrl, parameter, options).map((user : Response) => {
                return user;
            });
    }
}