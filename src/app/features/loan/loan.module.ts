import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoanCreateComponent } from './loan-create/loan-create.component';
import { LoanListComponent } from './loan-list/loan-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NotFoundComponent } from '../../shared/pages/not-found/not-found.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    LoanCreateComponent,
    LoanListComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule
  ],
  exports : [
    LoanCreateComponent,
    LoanListComponent,
    NotFoundComponent
  ]
})
export class LoanModule { }
