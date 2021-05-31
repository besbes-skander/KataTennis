import { Game } from './game';
import {Player} from "./player";



describe('Game', () => {
  let player1: Player;
  let player2: Player;

  beforeEach(() => {
    player1 = new Player('Player 1');
    player2 = new Player('Player 2');
  });

  it('should create an instance', () => {
    expect(new Game(player1, player2)).toBeTruthy();
  });

  it('should create a game with two players', () => {
    let game = new Game(player1, player2);

    expect(game.player1 instanceof Player).toBeTruthy();
    expect(game.player2 instanceof Player).toBeTruthy();
  });

  it('should return score to 0 when init game', () => {
    let game = new Game(player1, player2);

    expect(game.score()).toEqual('0 - 0');
  });
});
