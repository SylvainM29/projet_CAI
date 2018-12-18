import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { BieresProposeesService } from '../services/bieres-proposees.service';
import { SuggestedBeer } from '../models/proposition.model';

@Component({
  selector: 'app-bieres-proposees-view',
  templateUrl: './bieres-proposees-view.component.html',
  styleUrls: ['./bieres-proposees-view.component.scss']
})
export class BieresProposeesViewComponent implements OnInit, OnDestroy {

  isAuth = false;

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 1000
    );
  });

  suggestedBeer: SuggestedBeer[];

  beersSubscription: Subscription;

  constructor(private bieresProposeesService: BieresProposeesService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 1000
    );
  }

  ngOnInit() {
    this.beersSubscription = this.bieresProposeesService.beersSubject.subscribe(
      (beers: SuggestedBeer[]) => {
        this.suggestedBeer = beers;
      }
    );
    this.bieresProposeesService.emitBeersSubject();
  }

  ngOnDestroy() {
    this.beersSubscription.unsubscribe();
  }

  onLike() {
    this.bieresProposeesService.likeAll();
  }

  onUnlike() {
    if (confirm('Êtes-vous sûr de vouloir tout enlever de vos favoris ?')) {
      this.bieresProposeesService.unlikeAll();
    } else {
      return null;
    }
  }

  isAllLiked() {
    return this.bieresProposeesService.allLike;
  }

  onFetch() {
    this.bieresProposeesService.getBeersFromServer();
  }
}
