import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../services/catalogue.service'

@Component({
  selector: 'app-catalogue-view',
  templateUrl: './catalogue-view.component.html',
  styleUrls: ['./catalogue-view.component.scss']
})
export class CatalogueViewComponent implements OnInit {
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

  constructor(private catalogueService: CatalogueService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 1000
    );
  }

  ngOnInit() {
    this.beers = this.catalogueService.beers;
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
}
