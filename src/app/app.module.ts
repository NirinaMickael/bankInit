import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLayoutModule } from './pages/page-layout/page-layout.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ScheduleModule, RecurrenceEditorModule, DayService,WeekService,MonthService,MonthAgendaService, WorkWeekService } from '@syncfusion/ej2-angular-schedule';
import { CalendrierComponent } from './features/calendrier/calendrier.component';
@NgModule({
  declarations: [
    AppComponent,
    CalendrierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule, 
    ScheduleModule, RecurrenceEditorModule
  ],
  providers: [DayService,WeekService,WorkWeekService,MonthService,MonthAgendaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
