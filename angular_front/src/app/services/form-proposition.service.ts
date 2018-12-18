import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FormPropositionService{

  newProposition(name: string, brasserie: string, type: string, degre: string, region: string, description: string, availability: string){
    const formProposition = {
      id: "",
      name :'',
      brewery:'',
      style:'',
      alcohol:'',
      description:''
    };
    formProposition.id = name.trim();
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
