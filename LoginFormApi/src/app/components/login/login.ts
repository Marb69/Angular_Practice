
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  router = inject(Router);
  http = inject(HttpClient);


  logIn: FormGroup = new FormGroup({

    admin: new FormControl("",Validators.required),
    password: new FormControl("" ,Validators.required)

  });


    LogIn(){

      const logValue  = this.logIn.value;

      if(logValue.admin == 'admin' && logValue.password == 'admin1234'){

                 this.router.navigateByUrl('/dashboard');
      }
 
    
    }
  }
