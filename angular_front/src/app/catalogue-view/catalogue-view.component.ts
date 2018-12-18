import { Component, OnInit, OnDestroy } from '@angular/core';
import { CatalogueService } from '../services/catalogue.service'
import { Subscription } from 'rxjs';
import { CatalogBeer } from '../models/catalogue.model';

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

  catalogBeer: CatalogBeer[];

  beersSubscription: Subscription;

  onFetch() {
    this.catalogueService.getBeersFromServer();
  }

  constructor(private catalogueService: CatalogueService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 1000
    );

    this.onFetch();
  }

  ngOnInit() {
    this.beersSubscription = this.catalogueService.beersSubject.subscribe(
      (beers: CatalogBeer[]) => {
        console.log("yolo");
        this.catalogBeer = beers;
        console.log(this.catalogBeer);
        console.log("yolo2");
      }
    );
    this.catalogueService.emitBeersSubject();
  }

  ngOnDestroy() {
    this.beersSubscription.unsubscribe();
  }


}
