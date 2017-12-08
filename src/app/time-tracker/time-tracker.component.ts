import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {LocalStorageService} from 'angular-2-local-storage';

@Component({
  selector: 'app-time-tracker',
  templateUrl: './time-tracker.component.html',
  styleUrls: ['./time-tracker.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TimeTrackerComponent implements OnInit {

  date: Date;

  constructor(private localStorageService: LocalStorageService) {
    if (!this.date) {
      if (this.localStorageService.get('time')) {
        console.log(this.localStorageService.get('time'));
        this.date = new Date(Date.parse(this.localStorageService.get('time')));
      } else {
        this.date = new Date();
      }
    }
  }

  ngOnInit() {
  }

  addOneHour() {
    this.date.setHours(this.date.getHours() + 1);
    this.storeTime();
  }

  addHalf() {
    this.date.setMinutes(this.date.getMinutes() + 30);
    this.storeTime();
  }

  addEight() {
    this.date.setHours(this.date.getHours() + 8);
    this.storeTime();
  }

  storeTime() {
    console.log('storing ', this.date);
    this.localStorageService.add('time', this.date.toString());
  }

  resetTime() {
    this.date = new Date();
  }
}
