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
      id: 'StBernardusPater6',
      name: 'St Bernardus Pater 6',
      degre: 6.7,
      description: 'This name became a reference. This beer is mostly pointed out with its product name: a Paterke. This Paterke is a dark, chestnut coloured beer with a high fermentation (6.7%) and a full taste.',
      like: false
    },
    {
      id: 'ChimayRed',
      name: 'Chimay Rouge',
      degre: 7.0,
      description: 'This Trappist beer possesses a beautiful coppery colour that makes it particularly attractive. Topped with a creamy head, it gives off a slight fruity apricot smell from the fermentation. The aroma felt in the mouth is a balance confirming the fruit nuances revealed to the sense of smell. This traditional Belgian beer is best savoured at cellar temperature.',
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
