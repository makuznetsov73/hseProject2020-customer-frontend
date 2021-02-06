export class VirtualMachinePreview {
    id: string;
    username: string;
    on: boolean;
    ipAddress: string;
}

export class VirtualMachine {
    id: string;
    name: string;
    groupId: string;
    groupName: string;
    login: string;
    password: string;
    username: string;

    size: string;
    sku: string;
    on: boolean;
    blocked: boolean;
    price: number;
    ipAddress: string;
    startDate: Date;
    endTime: Date;
    startPause: Date;
}

export class BillingLists {
    public static skuList: Array<string> = ["2012-Datacenter", "2012-R2-Datacenter", "2016-Datacenter", "2019-Datacenter"];
    public static sizeList: Array<string> = ["Standard_B1ls", "Standard_B1ms", "Standard_B2ms", "Standard_B20ms",
        "Standard_DS1_v2", "Standard_DS5_v2", "Standard_D48s_v3"];
}


