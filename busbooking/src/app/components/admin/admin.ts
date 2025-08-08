import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, Signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { User } from '../user/user';


@Component({
  selector: 'app-admin',
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})
export class Admin implements OnInit {


  ngOnInit(): void {
      
    this.viewUser();
  }

   http = inject(HttpClient);


   UserData: any [] = [];
   emial: any;

   registeredUser: FormGroup = new FormGroup({


    userId: new FormControl(0),
    emailId: new FormControl(""),
    fullName: new FormControl(""),
    password: new FormControl(""),
    mobileNo: new FormControl()

   });



      registerUser(){

    const formValue = this.registeredUser.value;
       this.http.post("https://api.freeprojectapi.com/api/GoalTracker/register",formValue).subscribe({

       next: (res)=>{
         
    
        
        alert("User created")
        this.viewUser();
       },
       error: (error) =>{

        alert("errr" + error.error)
       }
       })
   }
   viewUser(){

       this.http.get("https://api.freeprojectapi.com/api/GoalTracker/getAllUsers").subscribe({

        next:(data : any)=>{

         this.UserData = data;
        }
       })
   }
  

   userid: any;


   edit(item: any){
  
    debugger;
        
       
         this.registeredUser.patchValue(item); 
          this.emial = this.registeredUser.value;

         
    }
      

    update(){

  debugger;
  this.registeredUser.value.createdDate = new Date();
         this.http.put("https://api.freeprojectapi.com/api/GoalTracker/updateUser?id=" + this.registeredUser.value.userId,this.registeredUser.value).subscribe({

          next:()=>{

            debugger;
            this.viewUser();

          },

          error: (error)=>{

            alert("err" + error.error);
          }
         })
    }

       delete(id: any){

  debugger;
  
     
    this.http.delete("https://api.freeprojectapi.com/api/GoalTracke/deleteUserById?id=" + id.userId).subscribe({

      next: () =>{

        this.viewUser();
      },
      error:(error)=>{

        alert("Aerrr " + error.error );
      }
    })
    }
    reset(){

      this.registeredUser.patchValue({

       emailId: "",
      fullName: "",
      password: "",
       mobileNo: ""

      })
    }
    
   }


