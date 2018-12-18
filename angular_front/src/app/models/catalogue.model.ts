import { Injectable } from '@angular/core';
import { Beer } from './beer.model';

@Injectable()
export class CatalogBeer {
  constructor() { }

  private _beer: Beer;
 
  private _served: boolean;
    
  private _contenant: string;

  public get beer(): Beer {
    return this._beer;
  }
  public set beer(value: Beer) {
    this._beer = value;
  }

  public get contenant(): string {
      return this._contenant;
  }
  public set contenant(value: string) {
      this._contenant = value;
  }

  public get served(): boolean {
    return this._served;
  }
  public set served(value: boolean) {
    this._served = value;
  }

}
