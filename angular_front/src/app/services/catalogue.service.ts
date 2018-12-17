import { Subject } from 'rxjs';

export class CatalogueService {
  allLike = false;

  beersSubject = new Subject<any[]>();

  private beers = [
    {
      name: 'Heineken',
      degre: 4.5,
      description: 'Bière de luxe',
      like: true
    },
    {
      name: 'Leffe',
      degre: 6.0,
      description: 'Bière des fragiles',
      like: true
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
      like: true
    }
  ];

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
}
