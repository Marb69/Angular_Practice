import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class Main {

  name = "This interpolation, Data binding";


  isActive = false;
  
  toggle(){

      
    this.isActive = !this.isActive;
  }
}
