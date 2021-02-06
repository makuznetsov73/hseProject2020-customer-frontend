import {Component} from '@angular/core';
import {NbLoginComponent} from '@nebular/auth';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {TariffService} from '../tariffs/tariffService';
import {Configuration} from '../../entities/configuration';
import {TariffPreview} from '../../entities/tariff';
import {AuthService} from '../../entities/authService';
import {CustomerAuth} from '../../entities/customer';

@Component({
    selector: 'ngx-our-login',
    styleUrls: ['./login.component.scss'],
    templateUrl: './login.component.html',
})
export class LoginComponent {

    service: AuthService;
    http: HttpClient;

    login: string = "";
    password: string = "";

    user: CustomerAuth;

    valid: boolean;

    errorMessage: string = '';
    serverError: boolean = false;

    public constructor(http: HttpClient, private router: Router) {
        this.http = http;
        this.service = new AuthService(http, `${Configuration.backHost}`);
        this.valid = true;
        this.user = new CustomerAuth();
    }

    public loginFunc() {
        this.user.password = this.password;
        this.user.username = this.login;
        this.service.login(this.user).subscribe(data => {
            if (data.res) {
                localStorage.setItem('token', data.data.token);
                localStorage.setItem('username', data.data.username);
                this.router.navigate([""]);
            } else {
                this.errorMessage = data.data.token;
                this.serverError = true;
            }
        });
    }

    isNonEmptyString(str: string) {
        return str && str.length > 0;
    }

    isValidForm() {
        this.valid = this.isNonEmptyString(this.login) && this.isNonEmptyString(this.password);
        return this.valid;
    }

}