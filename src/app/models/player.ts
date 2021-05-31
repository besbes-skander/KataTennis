export class Player {
  private _name;
  private _points: number;

  constructor(playerName: string) {
    this._name = playerName;
    this._points = 0;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get points(): number {
    return this._points;
  }

  set points(value: number) {
    this._points = value;
  }
}
