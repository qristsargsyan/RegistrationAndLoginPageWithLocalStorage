import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
    {
      path:'',
      children:[{
        path:'login', component:LoginComponent
      },
      {
        path:'registration',component:RegistrationComponent
      },
      {
        path:'home', component:HomeComponent
      }]  
    },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemManagmentRoutingModule { }
