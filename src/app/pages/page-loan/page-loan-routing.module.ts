import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanCreateComponent } from 'src/app/features/loan/loan-create/loan-create.component';
import { LoanListComponent } from 'src/app/features/loan/loan-list/loan-list.component';
import { NotFoundComponent } from 'src/app/features/loan/not-found/not-found.component';

const routes: Routes = [
       {
         path:"create",
         component:LoanCreateComponent
       },
       {
         path:"list",
         component:LoanListComponent
       },
       {
         path:"**",
         component :NotFoundComponent
       }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageLoanRoutingModule { }
