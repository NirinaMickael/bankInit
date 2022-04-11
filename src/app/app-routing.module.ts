import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanCreateComponent } from './features/loan-create/loan-create.component';
import { PageLayoutComponent } from './pages/page-layout/page-layout.component';

const routes: Routes = [
  {path:'', redirectTo:'pages', pathMatch:'full'},
  {
    path: 'pages',
    loadChildren: () => import('./pages/page-layout/page-layout.module').then(m => m.PageLayoutModule),
    component:PageLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
