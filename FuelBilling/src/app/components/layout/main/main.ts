import { Component } from '@angular/core';
import { Sidebar } from '../sidebar/sidebar';
import { RouterOutlet } from '@angular/router';
import { Header } from '../header/header';


@Component({
  selector: 'app-main',
  imports: [Sidebar,RouterOutlet,Header],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class Main {

}
