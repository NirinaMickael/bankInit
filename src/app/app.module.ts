import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLayoutModule } from './pages/page-layout/page-layout.module';
import { SidemenuComponent } from './features/sidemenu/sidemenu.component';
@NgModule({
  declarations: [
    AppComponent,
    SidemenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PageLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
