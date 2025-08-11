import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Master } from '../../services/master';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alluser',
  imports: [],
  templateUrl: './alluser.html',
  styleUrl: './alluser.css'
})
export class Alluser implements OnInit {


 router = inject(Router);
  http = inject(HttpClient);

  masterService = inject(Master);

  ngOnInit(): void {
      
    this.allUser();

  }



  dataUser: any [] = [];

  

  allUser(){


   this.masterService.getAllUser().subscribe({

      next:(data: any) =>{

         this.dataUser = data;
      }
     })
  }



  delete(id: number){

    this.masterService.delete(id).subscribe({

      next:()=>{

        alert("User deleted " + "Id = " + id);
         this.allUser();
      },
      error:(error)=>{

        alert('Error ' + error.error);
      }

     })
  }

  navEdit(){

     this.router.navigateByUrl("/updateuser")
  }
  
}
