import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CatalogBeer } from '../models/catalogue.model';

@Injectable()
export class CatalogueService {

  beersSubject = new Subject<CatalogBeer[]>();

  catalogBeer: CatalogBeer[];

  /*private beers = [
    {
      id: 'AffligemBlond',
      name: 'Affligem Blond',
      degre: 6.8,
      description: 'Affligem Blonde, the classic clear blonde abbey ale, with a gentle roundness and 6.8% alcohol. Low on bitterness, it is eminently drinkable.'
    },
    {
      id: 'AffligemTripel',
      name: 'Affligem Tripel',
      degre: 8.5,
      description: 'The king of the abbey beers. It is amber-gold and pours with a deep head and original aroma, delivering a complex, full bodied flavour. Pure enjoyment! Secondary fermentation in the bottle.'
    },
    {
      id: 'StBernardusPater6',
      name: 'St Bernardus Pater 6',
      degre: 6.7,
      description: 'This name became a reference. This beer is mostly pointed out with its product name: a Paterke. This Paterke is a dark, chestnut coloured beer with a high fermentation (6.7%) and a full taste.'
    },
    {
      id: 'ChimayRed',
      name: 'Chimay Rouge',
      degre: 7.0,
      description: 'This Trappist beer possesses a beautiful coppery colour that makes it particularly attractive. Topped with a creamy head, it gives off a slight fruity apricot smell from the fermentation. The aroma felt in the mouth is a balance confirming the fruit nuances revealed to the sense of smell. This traditional Belgian beer is best savoured at cellar temperature.'
    }
  ];*/

  constructor(private httpClient: HttpClient) {}

  emitBeersSubject() {
    // On émet une copie de la liste des bières
    this.beersSubject.next(this.catalogBeer.slice());
  }

  getBeerByName(name: string) {
    const beer = this.catalogBeer.find(
      (beerObject) => {
        return beerObject.beer.name == name;
      }
    );
    return beer;
  }

  getBeersFromServer() {
    this.httpClient.get<CatalogBeer[]>('http://localhost:8080/catalog').subscribe(
      (response) => {
        this.catalogBeer = response;
        console.log(response);
        this.emitBeersSubject();
      },
      (error) => {
        console.log('Erreur de chargement : ' + error);
      }
    );
  }
}
