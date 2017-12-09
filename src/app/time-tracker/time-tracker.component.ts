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
  hour: number;
  minute: number;

  constructor(private localStorageService: LocalStorageService) {
    if (!this.date) {
      if (this.localStorageService.get('time')) {
        this.date = new Date(Date.parse(this.localStorageService.get('time')));
      } else {
        this.date = new Date();
      }
    }
    this.updateTime();
  }

  ngOnInit() {
  }

  onChange(hourOrMinute: string) {
    if (hourOrMinute === 'hour' && this.hour <= 23) {
      this.date.setHours(this.hour);
    } else if (hourOrMinute === 'minute' && this.minute <= 59) {
      this.date.setMinutes(this.minute);
    }
    this.storeTime();
    this.updateTime();
  }

  addOneHour() {
    this.date.setHours(this.date.getHours() + 1);
    this.storeTime();
    this.updateTime();
  }

  addHalf() {
    this.date.setMinutes(this.date.getMinutes() + 30);
    this.storeTime();
    this.updateTime();
  }

  addEight() {
    this.date.setHours(this.date.getHours() + 8);
    this.storeTime();
    this.updateTime();
  }

  storeTime() {
    this.localStorageService.add('time', this.date.toString());
  }

  updateTime() {
    this.hour = this.date.getHours();
    this.minute = this.date.getMinutes();
  }

  resetTime() {
    this.date = new Date();
    this.updateTime();
  }
}
