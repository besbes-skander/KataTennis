export class Player {
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
  private _name;

  constructor(playerName: string) {
    this._name = playerName;
  }
}
