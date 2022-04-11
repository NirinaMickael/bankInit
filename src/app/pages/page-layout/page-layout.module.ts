import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageLayoutRoutingModule } from './page-layout-routing.module';
import { PageLayoutComponent } from './page-layout.component';
import { HeaderComponent } from 'src/app/features/header/header.component';
import { LoanListComponent } from 'src/app/features/loan-list/loan-list.component';
import { LoanCreateComponent } from 'src/app/features/loan-create/loan-create.component';
import { LoanModule } from 'src/app/features/loan/loan.module';


@NgModule({
  declarations: [
    PageLayoutComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    PageLayoutRoutingModule,
    LoanModule
  ]
})
export class PageLayoutModule { }
