import { Component, Input, OnInit } from '@angular/core';
import { CatalogueService } from '../services/catalogue.service'

@Component({
  selector: 'app-consulter-catalogue',
  templateUrl: './consulter-catalogue.component.html',
  styleUrls: ['./consulter-catalogue.component.scss']
})

export class ConsulterCatalogueComponent implements OnInit {

  @Input() beerName: string;
  @Input() beerDegre: number;
  @Input() beerLiked: boolean;
  @Input() index: number;

  constructor(private catalogueService: CatalogueService) { }

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
      this.catalogueService.likeOne(this.index);
    } else if (this.beerLiked) {
      this.catalogueService.unlikeOne(this.index);
    }
  }
}
