import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup} from '@angular/forms';
import { Responsible } from 'src/app/core/models/responsible';
import { paymentMethod } from 'src/app/core/models/payment-method';
import { LoanService } from 'src/app/core/services/loan.service';

@Component({
  selector: 'app-loan-create',
  templateUrl: './loan-create.component.html',
  styleUrls: ['./loan-create.component.scss']
})
export class LoanCreateComponent implements OnInit {
  reimbursementMethod = ['Mensuel'];
  formgroup: FormGroup;
  constructor(private builder: FormBuilder, private loan: LoanService) {
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
    this.loan.getPageCreateData().subscribe(data=>{
      this.responsibles = data.responsible;
      this.paymentMethodes = data.paymentMethods;
    })
   }
  responsibles: Responsible[] = [];
  paymentMethodes: paymentMethod[] = [];
  ngOnInit(): void {
  }
  handleSubmit(formgroup:FormGroup){
    console.log(formgroup)
  }
}

