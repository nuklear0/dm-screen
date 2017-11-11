import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Dice} from './dice/dice';
import {Result} from './dice/result';
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-roll-dices',
  templateUrl: './roll-dices.component.html',
  styleUrls: ['./roll-dices.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class RollDicesComponent implements OnInit {

  dices: Dice[] = [new Dice(2),
    new Dice(4),
    new Dice(6),
    new Dice(8),
    new Dice(10),
    new Dice(12),
    new Dice(20),
    new Dice(100)];
  results: Result[];

  constructor() {
    this.results = [];
  }

  ngOnInit() {
  }

  roll(dice: number) {
    if (this.results.length === 5) {
      this.results.shift();
    }
    this.results.push(new Result(dice, Math.floor((Math.random() * dice) + 1)));
  }

  reset() {
    while (this.results.length > 0) {
      this.results.shift();
    }
  }

}
