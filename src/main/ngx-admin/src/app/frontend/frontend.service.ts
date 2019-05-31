import { Injectable } from '@angular/core';
import { NbAuthService, NbAuthJWTToken } from '@nebular/auth';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class FrontendService {

    token;

    private httpOptions = {};

    constructor(private http: HttpClient, private authService: NbAuthService) {

        this.authService.onTokenChange()
            .subscribe((token: NbAuthJWTToken) => {
                this.token = token.getValue(); // here we receive a payload from the token and assigne it to our `user` variable 
                this.httpOptions = {
                    headers: new HttpHeaders({ 'Authorization': 'Bearer ' + this.token }),
                };
            });
    }

    getUserProfile(username): Observable<any> {
        const url = `/api/v1/users/${username}`;
        return this.http.get<any>(url, this.httpOptions);
    }

    getUsers(): Observable<any[]> {
        const url = `/api/v1/users`;
        return this.http.get<any[]>(url, this.httpOptions);
    }

    saveUser(user): Observable<any[]> {
        const url = `/api/v1/users/save`;
        return this.http.post<any[]>(url, user, this.httpOptions);
    }
}
