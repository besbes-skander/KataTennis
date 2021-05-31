import { Game } from './game';
import {Player} from "./player";

describe('Game', () => {
  it('should create an instance', () => {
    const player1 = new Player('Player 1');
    const player2 = new Player('Player 2');

    expect(new Game(player1, player2)).toBeTruthy();
  });
});
