import {Injectable} from '@angular/core';
import {EntityService} from '../../entities/entityService';
import {Tariff, TariffPerCall, TariffPerTime, TariffPreview} from '../../entities/tariff';
import {VirtualMachine, VirtualMachinePreview} from '../../entities/virtualMachine';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class VirtualMachineService extends EntityService<VirtualMachine, VirtualMachinePreview> {

    constructor(http: HttpClient, urlPath: string) {
        super(http, urlPath);
    }

    createVirtualMachine(entity: VirtualMachine): Observable<RequestResponse<string>> {
        return this.http.post<RequestResponse<string>>(`${this.urlPath}/createVM`, entity,
            {headers: {'Authorization':`Bearer_${localStorage.getItem('token')}`,
                    'username':localStorage.getItem('username')}});
    }

    getVMs(): Observable<RequestResponse<Array<VirtualMachinePreview>>> {
        return this.http.get<RequestResponse<Array<VirtualMachinePreview>>>(`${this.urlPath}/get/myVMs`,
            {headers: {'Authorization':`Bearer_${localStorage.getItem('token')}`,
                    'username':localStorage.getItem('username')}});
    }

    getSingleVM(id: string): Observable<RequestResponse<VirtualMachine>> {
        return this.http.get<RequestResponse<VirtualMachine>>(`${this.urlPath}/single/full/${id}`,
            {headers: {'Authorization':`Bearer_${localStorage.getItem('token')}`,
                    'username':localStorage.getItem('username')}});
    }

    turnOnOff(id: string): Observable<RequestResponse<VirtualMachinePreview>> {
        return this.http.post<RequestResponse<VirtualMachinePreview>>(`${this.urlPath}/turnOnOff`, id,
            {headers: {'Authorization':`Bearer_${localStorage.getItem('token')}`,
                    'username':localStorage.getItem('username')}});
    }

    deleteVM(virtualMachine: VirtualMachine): Observable<RequestResponse<string>> {
        return this.http.post<RequestResponse<string>>(`${this.urlPath}/deleteVM`, virtualMachine,
            {headers: {'Authorization':`Bearer_${localStorage.getItem('token')}`,
                    'username':localStorage.getItem('username')}});
    }
}