import { Component, Input, OnInit } from '@angular/core';
import { CatalogueService } from '../services/catalogue.service'

@Component({
  selector: 'app-consulter-catalogue',
  templateUrl: './consulter-catalogue.component.html',
  styleUrls: ['./consulter-catalogue.component.scss']
})

export class ConsulterCatalogueComponent implements OnInit {
  @Input() beerId: string;
  @Input() beerName: string;
  @Input() beerDegre: number;
  @Input() index: number;

  constructor(private catalogueService: CatalogueService) { }

  ngOnInit() {
  }

  getDegre() {
    return this.beerDegre;
  }
}
