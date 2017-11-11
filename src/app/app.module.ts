import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RollDicesComponent } from './roll-dices/roll-dices.component';
import { InitiativeTrackerComponent } from './initiative-tracker/initiative-tracker.component';


@NgModule({
  declarations: [
    AppComponent,
    RollDicesComponent,
    InitiativeTrackerComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
