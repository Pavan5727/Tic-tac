import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TicTacToeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
}
