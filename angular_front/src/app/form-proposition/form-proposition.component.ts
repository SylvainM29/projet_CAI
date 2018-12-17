import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormPropositionService } from '../services/form-proposition.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-proposition',
  templateUrl: './form-proposition.component.html',
  styleUrls: ['./form-proposition.component.scss']
})
export class FormPropositionComponent implements OnInit {

  date = new Date();
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
    this.formPropositionService.newProposition(auteur, name, brasserie, typeB, degre, region);
    this.router.navigate(['/catalogue']);
  }
}
