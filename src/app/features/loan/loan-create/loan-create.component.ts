import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  registerForm = this.builder.group({
    responsible: ['', Validators.required],
    client: ['', Validators.required],
    amount: ['', Validators.required],
    percentage: ['', Validators.required],
    repaymentFrequency: ['', Validators.required],
    loanDate: ['', Validators.required],
    repaymentEndDate: ['', Validators.required],
    benefitPaymentMethod: ['', Validators.required],
    capitalPayementMethod: ['', Validators.required],
    remark: ['']
  });
  responsibles: Responsible[] = [];
  paymentMethodes: paymentMethod[] = [];
  constructor(private builder: FormBuilder, private loan: LoanService ) {
  }
  ngOnInit(): void {
    this.loan.getPageCreateData().subscribe(data => {
      this.responsibles = data.responsible;
      this.paymentMethodes = data.paymentMethods;
    })
    
  }
  handleSubmit(formgroup: FormGroup) {
    console.log(formgroup)
  }
}

