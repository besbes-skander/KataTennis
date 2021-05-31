import {Player} from "./player";
import {ScoreService} from "../services/score.service";

export class Game {
  private _player1;
  private _player2;
  private scoreService: ScoreService;

  constructor(player1: Player, player2: Player) {
    this._player1 = player1;
    this._player2 = player2;
    this.scoreService = new ScoreService();
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
    return this.scoreService.getScore(this.player1, this.player2);
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
