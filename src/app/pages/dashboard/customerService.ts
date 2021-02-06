import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../entities/customer';

export class CustomerService {

    http: HttpClient;
    urlPath: string;

    constructor(http: HttpClient, urlPath: string) {
        this.http = http;
        this.urlPath = urlPath;
    }

    getCustomer(): Observable<RequestResponse<Customer>> {
        return this.http.get<RequestResponse<Customer>>(`${this.urlPath}/myAccount`,
            {headers: {'Authorization':`Bearer_${localStorage.getItem('token')}`,
                    'username':localStorage.getItem('username')}});
    }

    saveCustomer(customer: Customer): Observable<RequestResponse<Customer>> {
        return this.http.post<RequestResponse<Customer>>(`${this.urlPath}/saveAccount`, customer,
            {headers: {'Authorization':`Bearer_${localStorage.getItem('token')}`,
                    'username':localStorage.getItem('username')}});
    }
}
