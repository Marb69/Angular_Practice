import { HttpClient } from '@angular/common/http';
import { Component, computed, inject, OnInit, signal, Signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post',
  imports: [FormsModule],
  templateUrl: './post.html',
  styleUrl: './post.css'
})
export class Post implements OnInit {



     http = inject(HttpClient);


     ngOnInit(): void {
         
      this.getUser();

     }


     displayUser:any [] = [];



  
     regiteredUser: any = {

    
            "userId": 0,
            "emailId": " ",
            "password": " ",
            "fullName": " ",
            "mobileNo": " "

    
};
          
       
     

     getUser(){

      this.http.get("https://api.freeprojectapi.com/api/GoalTracker/getAllUsers").subscribe({
          
          next:(userss: any)=>{

            this.displayUser =  userss;
             
          },
          error:(errors)=>{

            alert('Errors ' + errors.errors);
            
          }})
        
     }

     postUser(){

       
           this.http.post("https://api.freeprojectapi.com/api/GoalTracker/register",this.regiteredUser).subscribe({
          
          next:()=>{

             alert("User created");
             this.getUser();
             
          },
          error:(errors)=>{

            alert('Errors ' + errors.errors);
            
          }})
      
     }

     updateUser(){

      this.regiteredUser.createdDate = new Date;
         this.http.put("https://api.freeprojectapi.com/api/GoalTracker/updateUser?id=" + this.regiteredUser.userId,this.regiteredUser).subscribe(
          {
            next:()=>{

                     alert("Update user");
                     this.getUser();
             

            },
            error:(error) =>{
              alert("error" + error.error);
            }
          }
         );
     }

     editUser(item:any){

      this.regiteredUser = item;


     }

     resetField(){


      this.regiteredUser = {

         "userId": 0,
            "emailId": " ",
            "password": " ",
            "fullName": " ",
            "mobileNo": " "

      }
     }

     deleteUser(id:number){


       this.http.delete("https://api.freeprojectapi.com/api/GoalTracker/deleteUserById?id=" + id).subscribe(
          {
            next:()=>{

                     alert("Delete user");
                    this.getUser();

            },
            error:(error) =>{
              alert("error" + error.error);
            }
          }
         );
        
     }
  
}
