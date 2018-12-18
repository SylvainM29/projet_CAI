import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { BieresProposeesService } from '../services/bieres-proposees.service';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-consulter-bieres-proposees',
  templateUrl: './consulter-bieres-proposees.component.html',
  styleUrls: ['./consulter-bieres-proposees.component.scss']
})

export class ConsulterBieresProposeesComponent implements OnInit, OnDestroy {

  @Input() beerId: string;
  @Input() beerName: string;
  @Input() beerDegre: number;
  @Input() beerVote: number;
  @Input() index: number;
  beerLiked: boolean;

  authStatus: boolean;

  authSubscription: Subscription;

  constructor(private bieresProposeesService: BieresProposeesService, private authService: AuthService) { }

  ngOnInit() {
    this.authStatus = this.authService.isAuth;
    this.authSubscription = this.authService.authSubject.subscribe(
      (auth: boolean) => {
        this.authStatus = auth;
      }
    );
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
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
      //this.beerLiked = true;
    } else if (this.beerLiked) {
      this.bieresProposeesService.unlikeOne(this.index);
      //this.beerLiked = false;
    }
  }

  addToCatalog() {
    this.bieresProposeesService.addToCatalog(this.beerId);
  }
}
