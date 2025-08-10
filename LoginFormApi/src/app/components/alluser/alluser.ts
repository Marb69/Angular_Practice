import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-alluser',
  imports: [],
  templateUrl: './alluser.html',
  styleUrl: './alluser.css'
})
export class Alluser implements OnInit {



  http = inject(HttpClient);


  ngOnInit(): void {
      
    this.allUser();

  }



  dataUser: any [] = [];

  

  allUser(){


     this.http.get("https://api.freeprojectapi.com/api/GoalTracker/getAllUsers").subscribe({

      next:(data: any) =>{

         this.dataUser = data;
      }
     })
  }



  delete(id: number){

     this.http.delete("https://api.freeprojectapi.com/api/GoalTracker/deleteUserById?id="+ id).subscribe({

      next:()=>{

        alert("User deleted " + "Id = " + id);
         this.allUser();
      },
      error:(error)=>{

        alert('Error ' + error.error);
      }

     })
  }
  
}
