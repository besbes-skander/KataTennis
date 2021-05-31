import {Player} from "./player";

export class Game {
  private _player1;
  private _player2;

  constructor(player1: Player, player2: Player) {
    this._player1 = player1;
    this._player2 = player2;
  }

  get player2() {
    return this._player2;
  }

  set player2(value) {
    this._player2 = value;
  }

  get player1() {
    return this._player1;
  }

  set player1(value) {
    this._player1 = value;
  }

  score(): string {
    let player1Score: string;
    let player2Score: string;
    switch (this.player1.points) {
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
    switch (this.player2.points) {
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

  addPoint(name: string): string {
    if (this.player1.name === name) {
      this.player1.points++;
    } else if (this.player2.name === name) {
      this.player2.points++;
    } else {
      throw Error('Unknown player');
    }

    return name;
  }
}
