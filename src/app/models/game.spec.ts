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

  it('should return Player1 name when he score', () => {
    let game = new Game(player1, player2);

    const scorer = game.addPoint(player1.name);

    expect(scorer).toEqual('Player 1');
  });

  it('should return player1 with points = 1 when he score', () => {
    let game = new Game(player1, player2);

    const scorer = game.addPoint(player1.name);

    expect(game.player1.points).toEqual(1);
  });

  it('should return player2 with points = 1 when he score', () => {
    let game = new Game(player1, player2);

    const scorer = game.addPoint(player2.name);

    expect(game.player2.points).toEqual(1);
  });

  it('should throw error when player unknown', () => {
    let game = new Game(player1, player2);

    expect(() => game.addPoint('Player 3')).toThrow(Error('Unknown player'));
  });


  it('should return player1 with points = 1 when he score', () => {
    let game = new Game(player1, player2);

    game.addPoint(player1.name);
    game.addPoint(player1.name);

    expect(game.player1.points).toEqual(2);
  });

  it('should return score Love - Love when init game', () => {
    let game = new Game(player1, player2);

    expect(game.score()).toEqual('Love - Love');
  });

  it('should return score Fifteen - Love when player1 score 1 point', () => {
    let game = new Game(player1, player2);

    game.addPoint('Player 1');

    expect(game.score()).toEqual('Fifteen - Love');
  });

  it('should return score Fifteen - Love when player1 score 2 point', () => {
    let game = new Game(player1, player2);

    game.addPoint('Player 1');
    game.addPoint('Player 1');

    expect(game.score()).toEqual('Thirty - Love');
  });
});
