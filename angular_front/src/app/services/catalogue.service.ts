export class CatalogueService {
  allLike = false;

  beers = [
    {
      name: 'Heineken',
      degre: 4.5,
      like: true
    },
    {
      name: 'Leffe',
      degre: 6.0,
      like: true
    },
    {
      name: '8.6',
      degre: 8.6,
      like: false
    },
    {
      name: 'Falsbourg',
      degre: 4.0,
      like: true
    }
  ];

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
