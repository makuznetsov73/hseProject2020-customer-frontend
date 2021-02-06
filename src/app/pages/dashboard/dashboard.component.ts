import {Component, OnDestroy} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators' ;
import { SolarData } from '../../@core/data/solar';
import {VirtualMachine} from '../entities/virtualMachine';
import {VirtualMachineService} from '../forms/virtualMachines/virtualMachineService';
import {HttpClient} from '@angular/common/http';
import {Configuration} from '../entities/configuration';
import {Router} from '@angular/router';
import {Customer} from '../entities/customer';
import {CustomerService} from './customerService';

interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
}

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {

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
      this.http = http;
      this.service = new CustomerService(http, `${Configuration.backHost}/user/customer`);
      this.service.getCustomer().subscribe(data => {
        if (data.res) {
          this.data = data.data;
          this.dataExists = true;
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
