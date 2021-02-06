import {Component} from '@angular/core';
import {NbRegisterComponent} from '@nebular/auth';
import {CustomerAuth} from '../../entities/customer';
import {AuthService} from '../../entities/authService';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {TariffService} from '../tariffs/tariffService';
import {Configuration} from '../../entities/configuration';

@Component({
    selector: 'ngx-our-register',
    styleUrls: ['./register.component.scss'],
    templateUrl: './register.component.html',
})
export class RegisterComponent {

    service: AuthService;
    http: HttpClient;
    Configuration = Configuration;

    login: string = "";
    password: string = "";
    passwordRepeat: string = "";

    user: CustomerAuth;

    valid: boolean;
    loginValid: boolean = true;
    passwordEqualValid: boolean;

    loginLengthValid: boolean = false;
    passwordLengthValid: boolean = false;

    errorMessage: string = '';

    public constructor(http: HttpClient, private router: Router) {
        this.http = http;
        this.service = new AuthService(http, `${Configuration.backHost}`);
        this.valid = true;
        this.loginValid = true;
        this.passwordEqualValid = true;
        this.user = new CustomerAuth();
    }

    public register() {
        this.user.password = this.password;
        this.user.username = this.login;
        this.service.register(this.user).subscribe(data => {
            if (data.res) {
                this.router.navigate(['pages/forms/login']);
            } else {
                this.errorMessage = data.data;
                this.loginValid = false;
            }
        });
    }

    isPasswordEqualValid() {
        if (this.password === this.passwordRepeat) {
            return true;
        }
        return false;
    }

    isPasswordRequired() {
        if (!this.password) {
            return true;
        }
        return false;
    }

    isPasswordEqualValidRequired() {
        if (!this.passwordRepeat) {
            this.passwordEqualValid = true;
            return true;
        }
        this.passwordEqualValid = false;
        return false;
    }

    isLoginLengthValid() {
        if (this.login.length < this.Configuration.minimumLoginLength) {
            this.loginLengthValid = false;
            return false;
        }
        this.loginLengthValid = true;
        return true;
    }

    isPasswordLengthValid() {
        if (this.password.length < this.Configuration.minimumPasswordLength) {
            this.passwordLengthValid = false;
            return false;
        }
        this.passwordLengthValid = true;
        return true;
    }

    isValid() {
        this.valid = this.passwordLengthValid && this.loginLengthValid && this.passwordEqualValid;
        return this.valid;
    }

}