import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './component/header/header';
import { Main } from './component/main/main';
import { Footer } from './component/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header,Main,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('FirstAngular');
}
