import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CalendarModule } from './calendar/calendar.module';
import { AppRoutingModule } from './app-routing.module';
import { RecipesModule } from './recipes/recipes.module';

import {MatToolbarModule, MatIconModule} from '@angular/material';
import { SearchComponent } from './search/search.component';




@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CalendarModule,
    RecipesModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


