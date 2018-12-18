export class Beer {
  private _alcohol: string;
 
  private _brewery: string;
  private _description: string;
  private _id: string;
  private _name: string;

  constructor() { }

  public get alcohol(): string {
    return this._alcohol;
  }
  public set alcohol(value: string) {
    this._alcohol = value;
  }

  public get brewery(): string {
    return this._brewery;
  }
  public set brewery(value: string) {
    this._brewery = value;
  }

  public get description(): string {
    return this._description;
  }
  public set description(value: string) {
    this._description = value;
  }

  public get id(): string {
    return this._id;
  }
  public set id(value: string) {
    this._id = value;
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
}
