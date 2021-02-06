import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { FormInputsComponent } from './form-inputs/form-inputs.component';
import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { FormsModule as ngFormsModule } from '@angular/forms';
import {TariffTableComponent} from './tariffs/tariffTable/tariffTable.component';
import {CloudComponent} from './cloud/cloud.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from './authInterceptor';
import {VirtualMachineTableComponent} from './virtualMachines/virtualMachineTable/virtualMachineTable.component';
import {HomeComponent} from './home/home.component';
import {VirtualMachineCreateComponent} from './virtualMachines/virtualMachineCreate/virtualMachineCreate.component';
import {VirtualMachineSingleComponent} from './virtualMachines/virtualMachineSingle/virtualMachineSingle.component';

@NgModule({
  imports: [
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    FormsRoutingModule,
    NbSelectModule,
    NbIconModule,
    ngFormsModule,
  ],
  declarations: [
    FormsComponent,
    ButtonsComponent,
    FormInputsComponent,
    FormLayoutsComponent,
    DatepickerComponent,
    TariffTableComponent,
    CloudComponent,
    LoginComponent,
    RegisterComponent,
    VirtualMachineTableComponent,
    HomeComponent,
    VirtualMachineCreateComponent,
    VirtualMachineSingleComponent,
  ],
})
export class FormsModule { }
