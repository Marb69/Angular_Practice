import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  http = inject(HttpClient);

 dataUser: FormGroup = new FormGroup({

     fname: new FormControl(''),
     mname: new FormControl(''),
     lname: new FormControl(''),
     email: new FormControl(''),
     mobileno: new FormControl(''),
     pass: new FormControl(''),
 });






  onRegister(){

     const registeredUser: any = {


     emailId:this.dataUser.value.email,
      password: this.dataUser.value.pass,
     fullName: this.dataUser.value.fname + " " + this.dataUser.value.mname + " " + this.dataUser.value.lname,
      mobileNo: this.dataUser.value.mobileno

   
 }
    debugger;
      this.http.post("https://api.freeprojectapi.com/api/GoalTracker/register",registeredUser).subscribe({

        next: ()=>{
           
          alert(" user succesfully registered");
            
        },
        error: (error) =>{
           
          alert("Error " + error.error);
        }
      })
  }



}
