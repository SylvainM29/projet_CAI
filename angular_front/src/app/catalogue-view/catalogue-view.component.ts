import { Component, OnInit, OnDestroy } from '@angular/core';
import { CatalogueService } from '../services/catalogue.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-catalogue-view',
  templateUrl: './catalogue-view.component.html',
  styleUrls: ['./catalogue-view.component.scss']
})
export class CatalogueViewComponent implements OnInit, OnDestroy {
  isAuth = false;

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 1000
    );
  });

  beers: any[];

  beersSubscription: Subscription;

  constructor(private catalogueService: CatalogueService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 1000
    );
  }

  ngOnInit() {
    this.beersSubscription = this.catalogueService.beersSubject.subscribe(
      (beers: any[]) => {
        this.beers = beers;
      }
    );
    this.catalogueService.emitBeersSubject();
  }

  ngOnDestroy() {
    this.beersSubscription.unsubscribe();
  }

  onLike() {
    this.catalogueService.likeAll();
  }

  onUnlike() {
    if (confirm('Êtes-vous sûr de vouloir tout enlever de vos favoris ?')) {
      this.catalogueService.unlikeAll();
    } else {
      return null;
    }
  }

  isAllLiked() {
    return this.catalogueService.allLike;
  }

  onFetch() {
    this.catalogueService.getBeersFromServer();
  }
}
