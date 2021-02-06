import {TariffState} from './tariffState';

export class CustomerAuth {
    username: string;
    password: string;
}

export class CustomerPreview {
    id: string;
    login: string;
    balance: number;
}

export class TariffCustomer {
    id: string;
    login: string;
    balance: number;
    tariffId: string;
    tariffName: string;
    tariffType: string;
    email: string;
    password: string;
    tariffState: TariffState;
    phoneNumber: string;
    creationTime: Date;
    changeTime: Date;
    newTariff: boolean;
}

export class Customer {
    id: string;
    login: string;
    name: string;
    balance: number;
    email: string;
    password: string;
    phoneNumber: string;
    blocked: boolean;
    machineIds: string[];
    creationTime: Date;
    changeTime: Date;
}
