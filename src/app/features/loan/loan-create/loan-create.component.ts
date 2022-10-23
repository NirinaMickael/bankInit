import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Responsible } from 'src/app/core/models/responsible';
import { paymentMethod } from 'src/app/core/models/payment-method';
import { LoanService } from 'src/app/core/services/loan.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loan-create',
  templateUrl: './loan-create.component.html',
  styleUrls: ['./loan-create.component.scss']
})
export class LoanCreateComponent implements OnInit {
  reimbursementMethod = ['Mensuel'];
  registerForm = this.builder.group({
    responsible: ['', Validators.required],
    client: ['Agent'],
    amount: ['', Validators.required],
    percentage: ['', Validators.required],
    repaymentFrequency: ['1'],
    loanDate: ['', Validators.required],
    repaymentEndDate: ['', Validators.required],
    benefitPaymentMethod: ['', Validators.required],
    capitalPayementMethod: ['', Validators.required],
    modeRemboursement: ['', Validators.required],
    remark: ['']
  });
  responsibles: Responsible[] = [];
  client = [{id:1,}]
  paymentMethodes: paymentMethod[] = [];
  constructor(private builder: FormBuilder, private loan: LoanService ,private _route : Router) {
  }
  ngOnInit(): void {
    this.loan.getPageCreateData().subscribe(data => {
      this.responsibles = data.responsible;
      this.paymentMethodes = data.paymentMethods;
    })
    
  }
  handleSubmit() {
   this.loan.loanCreate({
    responsible : this.registerForm.value.responsible,
    client : this.registerForm.value.client,
    amount : this.registerForm.value.amount,
    percentage : this.registerForm.value.percentage,
    repaymentFrequency : this.registerForm.value.repaymentFrequency,
    loanDate : this.registerForm.value.loanDate,
    repaymentEndDate: this.registerForm.value.repaymentEndDate,
    benefitPaymentMethod : this.registerForm.value.benefitPaymentMethod,
    capitalPaymentMethod : this.registerForm.value.capitalPayementMethod,
    remark : this.registerForm.value.remark
   }).subscribe(data=>console.log(data))
  }
}

