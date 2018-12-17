import { Component, OnInit } from '@angular/core';
import { FormPropositionService } from '../services/form-proposition.service';

@Component({
  selector: 'app-form-proposition',
  templateUrl: './form-proposition.component.html',
  styleUrls: ['./form-proposition.component.scss']
})
export class FormPropositionComponent implements OnInit {

  date = new Date();
  constructor(private formPropositionService: FormPropositionService) {
  }

  ngOnInit() {}

  onSubmit(form: NgForm){
    console.log(form.value);
  }

}
