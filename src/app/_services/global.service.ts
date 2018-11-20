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

        
        const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
        if(accessToken) {
            let authToken = localStorage.getItem('userAccessToken');
            headers.append('Authorization', `JWT ${authToken}`); 

        }
        return this.http.get(this.apiUrl+apiname, { headers }).map((user : Response) => {
            return user;
        });
        /* var headers = new Headers();

        if(accessToken) {
            let authToken = localStorage.getItem('userAccessToken');
            headers.append('Authorization', `JWT ${authToken}`); 
        }

        let options = new RequestOptions({ headers: headers });
        return this.newhttp.get(this.apiUrl+apiname, options).map((user : Response) => {
                return user.json();
            });*/
    }

    callPostApi(apiname, parameter, accessToken = false) {

        let httpParams = new HttpParams();
        Object.keys(parameter).forEach(function (key) {
             httpParams = httpParams.append(key, parameter[key]);
        });
        const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
        if(accessToken) {
            let authToken = localStorage.getItem('userAccessToken');
            headers.append('Authorization', `JWT ${authToken}`); 

        }
        return this.http.post(this.apiUrl+apiname, httpParams, { headers }).map((user : Response) => {
            return user;
        });
      
        /*var headers = new Headers();

        if(accessToken) {
            let authToken = localStorage.getItem('userAccessToken');
            headers.append('Authorization', `JWT ${authToken}`); 

        }
        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
        headers.append('Accept' , 'application/json');
        let options = new RequestOptions({ headers: headers });      
        
        
        return this.newhttp.post(this.apiUrl+apiname, parameter, options).map((user : Response) => {
                return user.json();
            });*/
    }
}