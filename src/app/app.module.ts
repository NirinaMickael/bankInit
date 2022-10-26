import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLayoutModule } from './pages/page-layout/page-layout.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
=======
import { ScheduleModule, RecurrenceEditorModule, DayService,WeekService,MonthService,MonthAgendaService, WorkWeekService } from '@syncfusion/ej2-angular-schedule';
import { CalendrierComponent } from './features/calendrier/calendrier.component';
>>>>>>> features/calendrier
@NgModule({
  declarations: [
    AppComponent,
    CalendrierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [HttpClientModule],
=======
    FontAwesomeModule, 
    ScheduleModule, RecurrenceEditorModule
  ],
  providers: [DayService,WeekService,WorkWeekService,MonthService,MonthAgendaService],
>>>>>>> features/calendrier
  bootstrap: [AppComponent]
})
export class AppModule { }
