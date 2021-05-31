import { Game } from './game';
import {Player} from "./player";

describe('Game', () => {
  it('should create an instance', () => {
    const player1 = new Player('Player 1');
    const player2 = new Player('Player 2');

    expect(new Game(player1, player2)).toBeTruthy();
  });

  it('should create a game with two players', () => {
    let player1 = new Player('Player 1');
    let player2 = new Player('Player 2');
    let game = new Game(player1, player2);

    expect(game.player1 instanceof Player).toBeTruthy();
    expect(game.player2 instanceof Player).toBeTruthy();
  });

  it('should return score to 0 when init game', () => {
    let player1 = new Player('Player 1');
    let player2 = new Player('Player 2');
    let game = new Game(player1, player2);

    expect(game.score()).toEqual('0 - 0');
  });
});
