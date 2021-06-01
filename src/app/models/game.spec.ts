import { Game } from './game';
import {Player} from "./player";




describe('Game', () => {
  let player1: Player;
  let player2: Player;
  let game: Game;

  function addPoints(player: Player, points: number) {
      for (let i = 0; i < points; i++) {
        game.addPoint(player.name);
      }
  }

  beforeEach(() => {
    player1 = new Player('Player 1');
    player2 = new Player('Player 2');
    game = new Game(player1, player2);
  });

  it('should create an instance', () => {
    expect(new Game(player1, player2)).toBeTruthy();
  });

  it('should create a game with two players', () => {
    expect(game.player1 instanceof Player).toBeTruthy();
    expect(game.player2 instanceof Player).toBeTruthy();
  });

  it('should return Player1 name when he score', () => {
    const scorer = game.addPoint(player1.name);

    expect(scorer).toEqual('Player 1');
  });

  it('should return player1 with points = 1 when he score', () => {
    const scorer = game.addPoint(player1.name);

    expect(game.player1.points).toEqual(1);
  });

  it('should return player2 with points = 1 when he score', () => {
    const scorer = game.addPoint(player2.name);

    expect(game.player2.points).toEqual(1);
  });

  it('should throw error when player unknown', () => {
    expect(() => game.addPoint('Player 3')).toThrow(Error('Unknown player'));
  });


  it('should return player1 with points = 2 when he score', () => {
    addPoints(player1, 2);

    expect(game.player1.points).toEqual(2);
  });

  it('should return score Love - Love when init game', () => {
    expect(game.score()).toEqual('Love - Love');
  });

  it('should return score Fifteen - Love when player1 score 1 point', () => {
    game.addPoint('Player 1');

    expect(game.score()).toEqual('Fifteen - Love');
  });

  it('should return score Fifteen - Love when player1 score 2 points', () => {
    addPoints(player1, 2);

    expect(game.score()).toEqual('Thirty - Love');
  });

  it('should return score Forty - Love when player1 score 3 points', () => {
    addPoints(player1, 3);

    expect(game.score()).toEqual('Forty - Love');
  });

  it('should return score Deuce when player1 and player2 scores 3 points', () => {
    addPoints(player1, 3);
    addPoints(player2, 3);

    expect(game.score()).toEqual('Deuce');
  });

  it('should return advantage for player1', () => {
    addPoints(player1, 4);
    addPoints(player2, 3);

    expect(game.score()).toEqual('Player 1 Advantage');
  });

  it('should return advantage for player2', () => {
    addPoints(player1, 3);
    addPoints(player2, 4);

    expect(game.score()).toEqual('Player 2 Advantage');
  });

  it('should return deuce when player scored more than 3 points but with equality', () => {
    addPoints(player1, 4);
    addPoints(player2, 4);

    expect(game.score()).toEqual('Deuce');
  });

  it('should return player 1 won the game', () => {
    addPoints(player1, 6);
    addPoints(player2, 4);

    expect(game.score()).toEqual('Player 1 Won');
  });

});
