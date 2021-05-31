import {Injectable} from '@angular/core';
import {Player} from "../models/player";

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  constructor() {
  }

  getScore(player1: Player, player2: Player) {
    let player1Score: string;
    let player2Score: string;

    if (player1.points === 3 && player2.points === 3) {
      return 'Deuce';
    }

    switch (player1.points) {
      case 0:
        player1Score = 'Love';
        break;
      case 1:
        player1Score = 'Fifteen';
        break;
      case 2:
        player1Score = 'Thirty';
        break;
      case 3:
        player1Score = 'Forty';
        break;
      default:
        player1Score = 'Love'
    }
    switch (player2.points) {
      case 0:
        player2Score = 'Love';
        break;
      case 1:
        player2Score = 'Fifteen';
        break;
      case 2:
        player2Score = 'Thirty';
        break;
      case 3:
        player2Score = 'Forty';
        break;
      default:
        player2Score = 'Love';
    }

    return player1Score + ' - ' + player2Score;
  }
}
