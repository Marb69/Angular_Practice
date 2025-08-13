import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Main } from "./components/layout/main/main";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Main],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('FuelBilling');
}
