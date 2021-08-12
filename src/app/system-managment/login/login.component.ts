import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};

  Password!:string

  constructor(private router:Router) { }

  ngOnInit(): void {
  
  }

  onSubmit(){
  var UserName = (localStorage.getItem("UserName"))?.toString();
  var Password = (localStorage.getItem("Password"))?.toString();
  if(UserName == this.model.username && Password == this.model.password)
  {
     alert("Successfully Logged in");
     this.router.navigate(['/home']);
  }
  else{
    alert("User name or password is invalid");
  }
   
  }



}
