import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormPropositionService } from '../services/form-proposition.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-catalogue',
  templateUrl: './form-catalogue.component.html',
  styleUrls: ['./form-catalogue.component.scss']
})
export class FormCatalogueComponent implements OnInit {
  id = 1;
  
  constructor(private formPropositionService: FormPropositionService,
              private router: Router) {  }

  ngOnInit() {}

  onSubmit(form: NgForm) {
    console.log(form.value);
    const auteur = form.value['auteur'];
    const name = form.value['name'];
    const brasserie = form.value['brasserie'];
    const typeB = form.value['type'];
    const degre = form.value['degre'];
    const region = form.value['region'];
    const description = form.value['description'];
    this.formPropositionService.newProposition(this.id, auteur, name, brasserie, typeB, degre, region, description);
    this.id = this.id+1;
    this.router.navigate(['/catalogue']);
  }
}

export class FormPropositionComponent implements OnInit {
  id = 1;
  constructor(private formPropositionService: FormPropositionService,
              private router: Router) {  }

  ngOnInit() {}

  onSubmit(form: NgForm) {
    console.log(form.value);
    const auteur = form.value['auteur'];
    const name = form.value['name'];
    const brasserie = form.value['brasserie'];
    const typeB = form.value['type'];
    const degre = form.value['degre'];
    const region = form.value['region'];
    const description = form.value['description'];
    this.formPropositionService.newProposition(this.id, auteur, name, brasserie, typeB, degre, region, description);
    this.id = this.id+1;
    this.router.navigate(['/catalogue']);
  }
}
