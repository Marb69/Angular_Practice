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

      this.http.get("https://api.freeprojectapi.com/api/GoalTracker/getAllUsers").subscribe((users:any) =>{
        this.displayUser = users;
      })
        
     }

     postUser(){

       
           this.http.post("https://api.freeprojectapi.com/api/GoalTracker/register",this.regiteredUser).subscribe({
          
          next:(res)=>{

             alert("User created");
             this.getUser();
             
          },
          error:(errors)=>{

            alert('Errors ' + errors.errors);
            
          }})
      
     }

  
}
