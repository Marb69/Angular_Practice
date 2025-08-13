import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Layout } from "./components/layout/layout";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule, RouterOutlet, RouterLink, Layout],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angularPrac');




  
}
