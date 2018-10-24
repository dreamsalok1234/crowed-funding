import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class RootauthService {
    //headers = new Headers();
    constructor(private http: HttpClient, private newhttp: Http) { }

    signUpService(formdata) {   
       var headers = new Headers({'Content-Type':  'application/json','Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Credentials':false,'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'});

       let options = new RequestOptions({ headers: headers });
        return this.newhttp.post('http://devv.website/crowdfund/apis/auth/signup', { firstName: formdata.first_name, lastName: formdata.last_name, email: formdata.email, password: formdata.password, phoneNumber: formdata.phone }, options).map((user : Response)=> {
                return user.json();
            });
    }

    login(formdata) {   
        var headers = new Headers({'Content-Type':  'application/json','Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Credentials':false,'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'});

       let options = new RequestOptions({ headers: headers });
        return this.newhttp.post('http://devv.website/crowdfund/apis/auth/login', { email: formdata.email, password: formdata.password }, options).map((user : Response) => {
                return user.json();
            });
    }

    logout() {
        // remove user from local storage to log user out
        let authToken = localStorage.getItem('userAccessToken');
        var headers = new Headers({'Content-Type':  'application/json','Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Credentials':false,'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'});
        headers.append('Authorization', `JWT ${authToken}`);

        let options = new RequestOptions({ headers: headers });
        return this.newhttp.get('http://devv.website/crowdfund/apis/auth/logout' ,options).map(user => {
                return user;
            });
    }
    updateProfile(formdata) {
        var headers = new Headers({'Content-Type':  'application/json','Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Credentials':false,'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'});
        let authToken = localStorage.getItem('userAccessToken');
        headers.append('Authorization', `JWT ${authToken}`);
       let options = new RequestOptions({ headers: headers });
        return this.newhttp.post('http://devv.website/crowdfund/apis/user/edit', { phoneNumber: formdata.phoneNumber, firstName: formdata.firstName, lastName: formdata.lastName, state: formdata.state, country: formdata.country, city: formdata.city, address: formdata.address, email : formdata.email }, options).map((user : Response) => {
                return user.json();
            });
    }
    changePassword(formdata) {
        var headers = new Headers({'Content-Type':  'application/json','Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Credentials':false,'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'});
        let authToken = localStorage.getItem('userAccessToken');
        headers.append('Authorization', `JWT ${authToken}`);
       let options = new RequestOptions({ headers: headers });
        return this.newhttp.post('http://devv.website/crowdfund/apis/auth/resetpassword', { newpassword: formdata.npassword, password: formdata.oldpassword }, options).map((user : Response) => {
                return user.json();
            });
    }
}