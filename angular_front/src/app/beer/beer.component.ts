import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../services/catalogue.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss']
})
export class BeerComponent implements OnInit {

  name: string = "None";
  degre: number = 0;
  description: string = "None";

  constructor(private catalogueService: CatalogueService, private route: ActivatedRoute) { }

  ngOnInit() {
    const name = this.route.snapshot.params['name'];
    const beer = this.catalogueService.getBeerByName(name);
    this.name = beer.name;
    this.degre = beer.degre;
    this.description = beer.description;
  }
}
