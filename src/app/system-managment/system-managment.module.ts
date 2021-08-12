import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemManagmentRoutingModule } from './system-managment-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [   
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    SystemManagmentRoutingModule,
    FormsModule
  ]
})
export class SystemManagmentModule { }
