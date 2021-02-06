import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CustomerAuth} from './customer';
import {JwtData} from './jwtData';

export class AuthService {

    http: HttpClient;
    urlPath: string;

    constructor(http: HttpClient, urlPath: string) {
        this.http = http;
        this.urlPath = urlPath;
    }

    register(user: CustomerAuth): Observable<RequestResponse<string>> {
        return this.http.post<RequestResponse<string>>(`${this.urlPath}/register`, user);
    }

    login(user: CustomerAuth): Observable<RequestResponse<JwtData>> {
        return this.http.post<RequestResponse<JwtData>>(`${this.urlPath}/authenticate_user`, user)
    }
}