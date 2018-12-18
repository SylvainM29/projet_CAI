import { Component, Input, OnInit } from '@angular/core';
import { BieresProposeesService } from '../services/bieres-proposees.service';

@Component({
  selector: 'app-consulter-bieres-proposees',
  templateUrl: './consulter-bieres-proposees.component.html',
  styleUrls: ['./consulter-bieres-proposees.component.scss']
})

export class ConsulterBieresProposeesComponent implements OnInit {

  @Input() beerId: string;
  @Input() beerName: string;
  @Input() beerDegre: number;
  @Input() beerVote: number;
  @Input() index: number;
  beerLiked: boolean;

  constructor(private bieresProposeesService: BieresProposeesService) { }

  ngOnInit() {
  }

  getDegre() {
    return this.beerDegre;
  }

  getLike() {
    return this.beerLiked;
  }

  getColor() {
    if (this.beerLiked) {
      return 'green';
    } else if (!this.beerLiked) {
      return 'red';
    }
  }

  onLike() {
    if (!this.beerLiked) {
      this.bieresProposeesService.likeOne(this.index);
      this.bieresProposeesService.upvoteSuggestedBeer(this.beerId);
    } else if (this.beerLiked) {
      this.bieresProposeesService.unlikeOne(this.index);
    }
  }
}
