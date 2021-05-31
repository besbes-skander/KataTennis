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

  it('should return score Fifteen - Love when player1 score 2 points', () => {
    let game = new Game(player1, player2);

    game.addPoint('Player 1');
    game.addPoint('Player 1');

    expect(game.score()).toEqual('Thirty - Love');
  });

  it('should return score Forty - Love when player1 score 3 points', () => {
    let game = new Game(player1, player2);

    game.addPoint('Player 1');
    game.addPoint('Player 1');
    game.addPoint('Player 1');

    expect(game.score()).toEqual('Forty - Love');
  });

  it('should return score Deuce when player1 and player2 scores 3 points', () => {
    let game = new Game(player1, player2);

    game.addPoint('Player 1');
    game.addPoint('Player 1');
    game.addPoint('Player 1');

    game.addPoint('Player 2');
    game.addPoint('Player 2');
    game.addPoint('Player 2');

    expect(game.score()).toEqual('Deuce');
  });

  it('should return advantage for player1', () => {
    let game = new Game(player1, player2);

    game.addPoint('Player 1');
    game.addPoint('Player 1');
    game.addPoint('Player 1');
    game.addPoint('Player 1');

    game.addPoint('Player 2');
    game.addPoint('Player 2');
    game.addPoint('Player 2');

    expect(game.score()).toEqual('Player 1 Advantage');
  });

  it('should return advantage for player2', () => {
    let game = new Game(player1, player2);

    game.addPoint('Player 1');
    game.addPoint('Player 1');
    game.addPoint('Player 1');

    game.addPoint('Player 2');
    game.addPoint('Player 2');
    game.addPoint('Player 2');
    game.addPoint('Player 2');

    expect(game.score()).toEqual('Player 2 Advantage');
  });

  it('should return deuce when player scored more than 3 points but with equality', () => {
    let game = new Game(player1, player2);

    game.addPoint('Player 1');
    game.addPoint('Player 1');
    game.addPoint('Player 1');
    game.addPoint('Player 1');

    game.addPoint('Player 2');
    game.addPoint('Player 2');
    game.addPoint('Player 2');
    game.addPoint('Player 2');

    expect(game.score()).toEqual('Deuce');
  });
});
