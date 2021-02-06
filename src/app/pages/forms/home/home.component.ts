import {Component, OnDestroy} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators' ;
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Customer} from '../../entities/customer';
import {CustomerService} from '../../dashboard/customerService';
import {Configuration} from '../../entities/configuration';

interface CardSettings {
    title: string;
    iconClass: string;
    type: string;
}

@Component({
    selector: 'ngx-home',
    styleUrls: ['./home.component.scss'],
    templateUrl: './home.component.html',
})
export class HomeComponent {

    data: Customer;
    service: CustomerService;
    http: HttpClient;
    Configuration = Configuration;

    id: string;
    urlParts: string[];
    error: boolean = false;
    dataExists: boolean = false;
    deletingError: string;
    turnOnOffError: string;


    public constructor(http: HttpClient, private router: Router) {
        this.data = new Customer();
        this.http = http;
        this.service = new CustomerService(http, `${Configuration.backHost}/user/customer`);
        this.service.getCustomer().subscribe(data => {
            if (data.res) {
                this.data = data.data;
                this.dataExists = true;
                this.data.machineIds = data.data.machineIds;
                console.log(data.data.machineIds)
            } else {
                this.error = true;
            }
        });
    }

    public saveCustomer() {
        this.service.saveCustomer(this.data).subscribe(data => {
            if (data.res) {
                this.data = data.data;
            }
        });
    }

    public navigateToVM(id) {
        this.router.navigate([`/pages/forms/virtualMachine/single/${id}`]);
    }
}
