import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BieresProposeesService {
  allLike = false;

  beersSubject = new Subject<any[]>();

  private beers = [
    {
      id: 'AffligemBlond',
      name: 'Affligem Blond',
      degre: 6.8,
      description: 'Affligem Blonde, the classic clear blonde abbey ale, with a gentle roundness and 6.8% alcohol. Low on bitterness, it is eminently drinkable.',
      like: false
    },
    {
      id: 'AffligemTripel',
      name: 'Affligem Tripel',
      degre: 8.5,
      description: 'The king of the abbey beers. It is amber-gold and pours with a deep head and original aroma, delivering a complex, full bodied flavour. Pure enjoyment! Secondary fermentation in the bottle.',
      like: false
    },
    {
      name: '8.6',
      degre: 8.6,
      description: 'Bière de la cuite',
      like: false
    },
    {
      name: 'Falsbourg',
      degre: 4.0,
      description: 'Bière des touristes',
      like: false
    }
  ];

  constructor(private httpClient: HttpClient) { }

  emitBeersSubject() {
    // On émet une copie de la liste des bières
    this.beersSubject.next(this.beers.slice());
  }

  getBeerByName(name: string) {
    const beer = this.beers.find(
      (beerObject) => {
        return beerObject.name == name;
      }
    );
    return beer;
  }

  likeOne(i: number) {
    this.beers[i].like = true;
    this.emitBeersSubject();
  }

  unlikeOne(i: number) {
    this.beers[i].like = false;
    this.emitBeersSubject();
  }

  likeAll() {
    for (let beer of this.beers) {
      beer.like = true;
      this.upvoteSuggestedBeer(beer.id);
    }
    this.allLike = true;
    this.emitBeersSubject();
  }

  unlikeAll() {
    for (let beer of this.beers) {
      beer.like = false;
    }
    this.allLike = false;
    this.emitBeersSubject();
  }

  getBeersFromServer() {
    this.httpClient.get<any[]>('http://localhost:8080/suggested').subscribe(
      (response) => {
        this.beers = response;
        this.emitBeersSubject();
      },
      (error) => {
        console.log('Erreur de chargement : ' + error);
      }
    );
  }

  upvoteSuggestedBeer(beer: string) {
    this.httpClient.get('http://localhost:8080/suggested/upvote/' + beer).subscribe(
      () => {
        console.log('Vote effectué.');
      },
      (error) => {
        console.log('Erreur lors du vote : ' + error);
      }
    )
  }
}
