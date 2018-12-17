export class CatalogueService {
  allLike = false;

  beers = [
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
  }

  unlikeOne(i: number) {
    this.beers[i].like = false;
  }

  likeAll() {
    for (let beer of this.beers) {
      beer.like = true;
    }
    this.allLike = true;
  }

  unlikeAll() {
    for (let beer of this.beers) {
      beer.like = false;
    }
    this.allLike = false;
  }
}
