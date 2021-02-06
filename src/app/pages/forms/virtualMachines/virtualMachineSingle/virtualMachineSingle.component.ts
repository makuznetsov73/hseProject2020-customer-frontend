import {Component} from '@angular/core';
import {VirtualMachine, VirtualMachinePreview} from '../../../entities/virtualMachine';
import {VirtualMachineService} from '../virtualMachineService';
import {HttpClient} from '@angular/common/http';
import {Configuration} from '../../../entities/configuration';
import {Router} from '@angular/router';

@Component({
    selector: 'ngx-vmachine-single',
    styleUrls: ['./virtualMachineSingle.component.scss'],
    templateUrl: './virtualMachineSingle.component.html',
})
export class VirtualMachineSingleComponent {

    data: VirtualMachine;
    service: VirtualMachineService;
    http: HttpClient;
    Configuration = Configuration;

    id: string;
    urlParts: string[];
    error: boolean = false;
    deletingError: string;
    turnOnOffError: string;


    public constructor(http: HttpClient, private router: Router) {
        this.http = http;
        this.service = new VirtualMachineService(http, `${Configuration.backHost}/user/vmachine`);

        this.urlParts = this.router.url.split('/');
        this.id = this.urlParts[this.urlParts.length - 1];
        this.service.getSingleVM(this.id).subscribe(data => {
            if (data.res) {
                this.data = data.data;
            } else {
                this.error = true;
            }
        });
    }

    public deleteVM() {
        this.service.deleteVM(this.data).subscribe(data => {
            if (data.res) {
                this.router.navigate([`/pages/forms/virtualMachine`]);
            } else {
                this.deletingError = data.data;
            }
        });
    }

    public pauseVM() {
        this.service.turnOnOff(this.id).subscribe(data => {
            if (data.res) {
                this.data.on = data.data.on;
                this.data.ipAddress = data.data.ipAddress;
                this.turnOnOffError = null;
            } else {
                if (this.data.on) {
                    this.turnOnOffError = "Something went wrong"
                } else {
                    this.turnOnOffError = "You can't turn on this virtual machine"
                }
            }
        });
    }
}
