import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("test interceptor");
        const modifiedReq = req.clone({
            headers: req.headers.set('Authorization', `Bearer_${localStorage.getItem('token')}`)
                .set('username', localStorage.getItem('username')),
        });
        return next.handle(modifiedReq);
    }
}