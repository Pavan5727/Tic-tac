import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-tic-tac-toe',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css'],
})
export class TicTacToeComponent {
  // Game State
  board: string[] = Array(9).fill('');
  isPlayerTurn: boolean = true;
  winner: string | null = null;

  // Game Mechanics
  resetGame(): void {
    this.board = Array(9).fill('');
    this.isPlayerTurn = true;
    this.winner = null;
    this.playComputerMove();
  }

  // Player Move
  playerMove(index: number): void {
    if (this.board[index] || this.winner) return;
    this.board[index] = 'X';
    if (this.checkWinner('X')) {
      this.winner = 'Player';
      return;
    }
    this.isPlayerTurn = false;
    this.playComputerMove();
  }

  // Computer Move (random choice)
  playComputerMove(): void {
    if (this.winner || this.isPlayerTurn) return;
    const availableMoves = this.board
      .map((val, index) => (val === '' ? index : -1))
      .filter((index) => index !== -1);

    const randomMove = availableMoves[Math.floor(Math.random() * availableMoves.length)];
    this.board[randomMove] = 'O';

    if (this.checkWinner('O')) {
      this.winner = 'Computer';
      return;
    }
    this.isPlayerTurn = true;
  }

  // Check for winner
  checkWinner(player: string): boolean {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    return winningPatterns.some(
      ([a, b, c]) => this.board[a] === player && this.board[b] === player && this.board[c] === player
    );
  }
}
