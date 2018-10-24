import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class PropertyService {
    //headers = new Headers();
    constructor(private http: HttpClient, private newhttp: Http) { }

    getProperty() {
        // remove user from local storage to log user out
        let authToken = localStorage.getItem('userAccessToken');
        var headers = new Headers({'Content-Type':  'application/json','Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Credentials':false,'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE','Access-Control-Allow-Headers': '*'});
        headers.append('Authorization', `JWT ${authToken}`);

        let options = new RequestOptions({ headers: headers });
        return this.newhttp.get('http://devv.website/crowdfund/apis/property/getProperty' ,options).map((data : Response) => {
                return data.json();
            });
    }
    getPropertyDetails(PropertyId) {
        // remove user from local storage to log user out
        let authToken = localStorage.getItem('userAccessToken');
        var headers = new Headers({'Content-Type':  'application/json','Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Credentials':false,'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE','Access-Control-Allow-Headers': '*'});
        headers.append('Authorization', `JWT ${authToken}`);

        let options = new RequestOptions({ headers: headers });
        return this.newhttp.get('http://devv.website/crowdfund/apis/property/getProperty/'+PropertyId ,options).map((data : Response) => {
                return data.json();
            });
    }
    requestPropertyDocuments(PropertyId) {
        // remove user from local storage to log user out
        let authToken = localStorage.getItem('userAccessToken');
        var headers = new Headers({'Content-Type':  'application/json','Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Credentials':false,'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE','Access-Control-Allow-Headers': '*'});
        headers.append('Authorization', `JWT ${authToken}`);

        let options = new RequestOptions({ headers: headers });
        return this.newhttp.post('http://devv.website/crowdfund/apis/property/requestFileDownload', {propertyId: PropertyId}, options).map((data : Response) => {
                return data.json();
            });
    }
}