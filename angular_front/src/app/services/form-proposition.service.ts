import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FormPropositionService{

  newProposition(id, name: string, brasserie: string, type: string, degre: string, region: string, description: string, availability: string){
    const formProposition = {
      id: 0,
      name :'',
      brewery:'',
      style:'',
      alcohol:'',
      description:''
    };
    formProposition.id = id;
    formProposition.name = name;
    formProposition.brewery = brasserie;
    formProposition.style = type;
    formProposition.alcohol = degre;
    formProposition.description = description;
    console.log(formProposition);
    this.httpClient
      .post('http://localhost:8080/suggested/new', formProposition)
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
