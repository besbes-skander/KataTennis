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

  score() {
    return '0 - 0';
  }
}
