import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Master {
  

  http = inject(HttpClient);


  getAllUser(){

     return this.http.get("https://api.freeprojectapi.com/api/GoalTracker/getAllUsers");
  }

  addUser(data:any){

   return this.http.post("https://api.freeprojectapi.com/api/GoalTracker/register",data);
  }

  update(id:number,data:any){

    return this.http.put("https://api.freeprojectapi.com/api/GoalTracker/updateUser?id="+id ,data);
  }

  getUser(id:number){

     return this.http.get("https://api.freeprojectapi.com/api/GoalTracker/getUserById?id=" + id);
  }

  delete(id:number){

    return  this.http.delete("https://api.freeprojectapi.com/api/GoalTracker/deleteUserById?id="+ id);
  }


}
