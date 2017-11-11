import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RollDicesComponent } from './roll-dices/roll-dices.component';
import { InitiativeTrackerComponent } from './initiative-tracker/initiative-tracker.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TableDisplayComponent } from './table-display/table-display.component';
import {MatSelectModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    RollDicesComponent,
    InitiativeTrackerComponent,
    TableDisplayComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    MatSelectModule
  ],
  exports: [
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
