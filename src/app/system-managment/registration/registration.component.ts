import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  model: any = {};



  constructor(private router:Router) { }

  ngOnInit(): void {

  //   this.registerForm = this.formBuilder.group({
  //     firstName: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(30)]],
  //     lastName: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(30)]],
  //     email: ['', [Validators.required, Validators.email,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
  //     password: ['', [Validators.required, Validators.minLength(6)]],
  //     confirmPassword: ['', Validators.required]
   
  // })
  

}
  onSubmit() {
    localStorage.setItem('UserName',this.model.email);
    localStorage.setItem('Password',this.model.password);
    this.router.navigate(['/login']);
  }

}
