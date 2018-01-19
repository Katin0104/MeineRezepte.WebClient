import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarViewComponent } from './calendar-view/calendar-view.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CalendarViewComponent],
  exports: [
    CalendarViewComponent
  ]
})
export class CalendarModule { }
