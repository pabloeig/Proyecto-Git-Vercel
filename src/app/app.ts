import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Segundapull } from './segundapull/segundapull';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Segundapull],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Proyecto-Git_vercel');
}
