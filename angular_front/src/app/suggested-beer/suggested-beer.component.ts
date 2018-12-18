import { Component, OnInit } from '@angular/core';
import { BieresProposeesService } from '../services/bieres-proposees.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-suggested-beer',
  templateUrl: './suggested-beer.component.html',
  styleUrls: ['./suggested-beer.component.scss']
})
export class SuggestedBeerComponent implements OnInit {

  name: string = "None";
  degre: string = "0";
  description: string = "None";

  constructor(private bieresProposeesService: BieresProposeesService, private route: ActivatedRoute) { }

  ngOnInit() {
    const name = this.route.snapshot.params['name'];
    const beer = this.bieresProposeesService.getBeerByName(name);
    this.name = beer.beer.name;
    this.degre = beer.beer.alcohol;
    this.description = beer.beer.description;
  }

}
