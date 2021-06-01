import {Injectable} from '@angular/core';
import {Player} from "../models/player";

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  constructor() {
  }

  getScore(player1: Player, player2: Player) : string {
    let player1Score: string;
    let player2Score: string;

    if (this.isDeuce(player1, player2)) {
      return 'Deuce';
    }

    if (this.haveWinner(player1, player2)) {
      return (player1.points > player2.points ? player1.name : player2.name) + ' Won';
    }

    if (this.isAdvantage(player1, player2)) {
      return (player1.points > player2.points ? player1.name : player2.name) + ' Advantage';
    }

    player1Score = this.getPointName(player1.points);
    player2Score = this.getPointName(player2.points);

    return player1Score + ' - ' + player2Score;
  }

  private isAdvantage(player1: Player, player2: Player): boolean {
    return player1.points != player2.points && (player1.points >= 3 && player2.points >= 3);
  }

  private isDeuce(player1: Player, player2: Player): boolean {
    return player1.points === player2.points && player1.points >= 3 && player2.points >= 3;
  }

  private haveWinner(player1: Player, player2: Player) {
    return (player1.points > 3 || player2.points > 3) &&(Math.abs(player1.points - player2.points) === 2);
  }

  private getPointName(points: number) {
    switch (points) {
      case 0:
        return 'Love';
        break;
      case 1:
        return 'Fifteen';
        break;
      case 2:
        return 'Thirty';
        break;
      case 3:
        return 'Forty';
        break;
      default:
        return 'Love'
    }
  }
}
