import { Injectable } from '@angular/core';
import { Beer } from './beer.model';

@Injectable()
export class SuggestedBeer {
  constructor() { }

  private _beer: Beer;

  private _nb_vote: number;
  
  private _date: String;

  public get beer(): Beer {
    return this._beer;
  }
  public set beer(value: Beer) {
    this._beer = value;
  }

  public get nb_vote(): number {
    return this._nb_vote;
  }
  public set nb_vote(value: number) {
    this._nb_vote = value;
  }

  public get date(): String {
    return this._date;
  }
  public set date(value: String) {
    this._date = value;
  }
}
