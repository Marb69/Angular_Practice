import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.html',
  styleUrl: './project.css'
})


export class Project implements OnInit{



  http = inject(HttpClient);
 
  countryList:any [] = [];
  weatherInfo: any [] = [];

 
  ngOnInit(): void {
      this.getCountry();
      this.getWeather();
  };
  getCountry(){

    this.http.get("https://api.freeprojectapi.com/api/BusBooking/GetAllUsers").subscribe((coun:any) => {
     this.countryList = coun.data;
    })
  };

  getWeather(){

    this.http.get("https://api.openweathermap.org/data/2.5/weather?q=Tagum&appid=YOUR_API_KEY&units=metric").subscribe((weat:any) => {

      this.weatherInfo = weat;
    })
  }

 
}
