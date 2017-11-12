import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-time-tracker',
  templateUrl: './time-tracker.component.html',
  styleUrls: ['./time-tracker.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TimeTrackerComponent implements OnInit {

  date: Date;

  constructor() {
    this.date = new Date();
  }

  ngOnInit() {
  }

  addOneHour() {
    this.date.setHours(this.date.getHours() + 1);
  }

  addHalf() {
    this.date.setMinutes(this.date.getMinutes() + 30);
  }

  addEight() {
    this.date.setHours(this.date.getHours() + 8);
  }
}
