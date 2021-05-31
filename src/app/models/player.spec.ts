import { Player } from './player';

describe('Player', () => {
  let player: Player;

  beforeEach(() => {
    player = new Player('Player 1');
  });

  it('should create an instance', () => {
    expect(new Player('Player 1')).toBeTruthy();
  });

  it('should set player name to Player 1', () => {
    expect(player.name).toEqual('Player 1');
  });

  it('should return player points 0', () => {
    expect(player.points).toEqual(0);
  });
});
