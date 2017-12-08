import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RollDicesComponent } from './roll-dices/roll-dices.component';
import { InitiativeTrackerComponent } from './initiative-tracker/initiative-tracker.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TableDisplayComponent } from './table-display/table-display.component';
import {MatDatepicker, MatSelectModule} from '@angular/material';
import { TimeTrackerComponent } from './time-tracker/time-tracker.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { LocalStorageModule } from 'angular-2-local-storage';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    RollDicesComponent,
    InitiativeTrackerComponent,
    TableDisplayComponent,
    TimeTrackerComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    MatSelectModule,
    FlexLayoutModule,
    LocalStorageModule.withConfig({
      prefix: 'my-app',
      storageType: 'localStorage'
    })
  ],
  exports: [
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
