import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-get',
  imports: [],
  templateUrl: './get.html',
  styleUrl: './get.css'
})
export class Get implements OnInit{


  http = inject(HttpClient);
 
  userList: any [] = [];

  ngOnInit(): void {
    
      this.getUser();
  }
  getUser(){

    this.http.get("https://api.freeprojectapi.com/api/BusBooking/GetAllUsers").subscribe((users:any) =>{
    this.userList = users.data;

    })

  }
}
