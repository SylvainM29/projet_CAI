export class FormPropositionService{

  newProposition(auteur: string, name: string, brasserie: string, type: string, degre: string, region: string, date: string){
    const formProposition = {
      auteur :'',
      name :'',
      brasserie:'',
      typeB:'',
      degre:'',
      region:'',
      date:''
    };
    formProposition.auteur = auteur;
    formProposition.name = name;
    formProposition.brasserie = brasserie;
    formProposition.typeB = type;
    formProposition.degre = degre;
    formProposition.region = region;
    formProposition.date = date;
  }
}
