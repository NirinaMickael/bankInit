import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup} from '@angular/forms'
@Component({
  selector: 'app-loan-create',
  templateUrl: './loan-create.component.html',
  styleUrls: ['./loan-create.component.scss']
})
export class LoanCreateComponent implements OnInit {
  formgroup: FormGroup;
  constructor(private builder: FormBuilder) {
    this.formgroup = this.builder.group({
       'responsable':[],
       'montantPret':[],
       'pourcentage':[],
       'datePret':[],
       'dateFinRemboursement':[],
       'dateFinPret':[],
       'modeRemboursement':[],
       'modePayementCapital':[],
       'commentaire':[],
       'modePayementInteret':[]
    });
   }

  ngOnInit(): void {
  }
  handleSubmit(formgroup:FormGroup){
    console.log(formgroup)
  }
}

