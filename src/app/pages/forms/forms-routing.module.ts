import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormsComponent } from './forms.component';
import { FormInputsComponent } from './form-inputs/form-inputs.component';
import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { ButtonsComponent } from './buttons/buttons.component';
import {TariffTableComponent} from './tariffs/tariffTable/tariffTable.component';
import {CloudComponent} from './cloud/cloud.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AuthGuard} from '../entities/authGuard';
import {VirtualMachineTableComponent} from './virtualMachines/virtualMachineTable/virtualMachineTable.component';
import {VirtualMachineSingleComponent} from './virtualMachines/virtualMachineSingle/virtualMachineSingle.component';
import {VirtualMachineCreateComponent} from './virtualMachines/virtualMachineCreate/virtualMachineCreate.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: FormsComponent,
    children: [
      {
        path: 'virtualMachine',
        component: VirtualMachineTableComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'virtualMachine/new',
        component: VirtualMachineCreateComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'virtualMachine/single/:id',
        component: VirtualMachineSingleComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard],
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class FormsRoutingModule {
}

