import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLayoutComponent } from './pages/page-layout/page-layout.component';
import { NotFoundComponent } from './shared/pages/not-found/not-found.component';

const routes: Routes = [
  
  {path:'', redirectTo:'pages', pathMatch:'full'},
  {
    path: 'pages',
    loadChildren: () => import('./pages/page-layout/page-layout.module').then(m => m.PageLayoutModule),
    component:PageLayoutComponent
  },
  {
    path:"**",
    component : NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
