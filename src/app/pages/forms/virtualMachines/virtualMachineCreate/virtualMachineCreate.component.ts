import {Component} from '@angular/core';
import {BillingLists, VirtualMachine} from '../../../entities/virtualMachine';
import {VirtualMachineService} from '../virtualMachineService';
import {HttpClient} from '@angular/common/http';
import {Configuration} from '../../../entities/configuration';
import {Router} from '@angular/router';

@Component({
    selector: 'ngx-vmachine-new',
    styleUrls: ['./virtualMachineCreate.component.scss'],
    templateUrl: './virtualMachineCreate.component.html',
})
export class VirtualMachineCreateComponent {

    data: VirtualMachine;
    service: VirtualMachineService;
    http: HttpClient;
    Configuration = Configuration;

    creatingError: string;
    loginError: string;
    passwordError: string;
    error: boolean = false;

    sizeTypes: Array<string> = BillingLists.sizeList;
    skuTypes: Array<string> = BillingLists.skuList;

    public constructor(http: HttpClient, private router: Router) {
        this.http = http;
        this.service = new VirtualMachineService(http, `${Configuration.backHost}/user/vmachine`);
        this.data = new VirtualMachine();
        this.data.blocked = false;
        this.data.on = true;
        this.data.username = localStorage.getItem('username');
    }

    createNew(event) {
        if (this.data.login && this.data.login.length > 4) {
            this.loginError = "";
            if (this.data.password && this.data.password.length > 8) {
                this.passwordError = "";
                if (this.data.groupName && this.data.groupName.length > 0
                    && this.data.name && this.data.groupName.length > 0
                    && this.data.size && this.data.size.length > 0
                    && this.data.sku && this.data.sku.length > 0)
                {
                    this.data.groupId = this.data.groupName + "_" + this.data.username;
                    this.data.id = this.data.name + "_" + this.data.username;
                    this.error = false;
                    this.service.createVirtualMachine(this.data).subscribe(data => {
                        if (data.res) {
                            this.router.navigate([`/pages/forms/virtualMachine/single/${this.data.id}`]);
                        } else {
                            this.creatingError = data.data;
                            this.error = true;
                        }
                    });
                } else {
                }
            } else {
                this.passwordError = "Unacceptable password";
                console.log('pass');
            }
        } else {
            this.loginError = "Login must be at least 4 characters long";
            console.log('login');
        }
    }
}
