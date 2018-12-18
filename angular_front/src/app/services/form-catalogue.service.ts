import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FormCatalogueService{

  newCatalogueBeer(id, auteur: string, name: string, brasserie: string, type: string, degre: string, region: string, description: string,
      availability: string) {
    const formCatalogue = {
      id: 0,
      name :'',
      brewery:'',
      style:'',
      alcohol:'',
      description:'',
      availability:''
    };
    formCatalogue.id = id;
    formCatalogue.name = name;
    formCatalogue.brewery = brasserie;
    formCatalogue.style = type;
    formCatalogue.alcohol = degre;
    formCatalogue.description = description;
    formCatalogue.availability = availability;
    console.log(formCatalogue);
    this.httpClient
      .post('http://localhost:8080/suggested/new/formCatalogue.json', formCatalogue)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  constructor(private httpClient: HttpClient) { }

}
