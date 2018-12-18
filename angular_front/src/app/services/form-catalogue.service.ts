import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FormCatalogueService{

  newCatalogueBeer(auteur: string, name: string, brasserie: string, type: string, degre: string, region: string, description: string,
      availability: string) {
    const formCatalogue = {
      id: '',
      name :'',
      brewery:'',
      style:'',
      alcohol:'',
      description:'',
      availability:''
    };
    formCatalogue.id = name.trim();
    formCatalogue.name = name;
    formCatalogue.brewery = brasserie;
    formCatalogue.style = type;
    formCatalogue.alcohol = degre;
    formCatalogue.description = description;
    formCatalogue.availability = availability;
    console.log(formCatalogue);
    this.httpClient
      .post('http://localhost:8080/catalog/new', formCatalogue)
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
