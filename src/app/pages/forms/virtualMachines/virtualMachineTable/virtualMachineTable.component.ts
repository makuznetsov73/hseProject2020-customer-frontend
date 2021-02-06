import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Configuration} from '../../../entities/configuration';
import {Router} from '@angular/router';
import {VirtualMachinePreview} from '../../../entities/virtualMachine';
import {VirtualMachineService} from '../virtualMachineService';

@Component({
    selector: 'ngx-vmachine-table',
    styleUrls: ['./virtualMachineTable.component.scss'],
    templateUrl: './virtualMachineTable.component.html',
})
export class VirtualMachineTableComponent {

    data: Array<VirtualMachinePreview>;
    service: VirtualMachineService;
    http: HttpClient;
    Configuration = Configuration;

    public constructor(http: HttpClient, private router: Router) {
        this.http = http;
        this.service = new VirtualMachineService(http, `${Configuration.backHost}/user/vmachine`);
        this.service.getVMs().subscribe(data => {
            if (data.res) {
                this.data = data.data;
            }
        });
    }

    createNew(event) {
        this.router.navigate([`/pages/forms/virtualMachine/new`]);
    }

    getSingle(event, id: string) {
        this.router.navigate([`/pages/forms/virtualMachine/single/${id}`]);
    }

    ifDataEmpty() {
        if (this.data) {
            return this.data.length == 0;
        } return false;
    }
}
