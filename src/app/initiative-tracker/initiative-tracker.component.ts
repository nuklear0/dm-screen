import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Character} from './character/character';

@Component({
  selector: 'app-initiative-tracker',
  templateUrl: './initiative-tracker.component.html',
  styleUrls: ['./initiative-tracker.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InitiativeTrackerComponent implements OnInit {

  listOfInitiatives: Character[];
  nameInput: string;
  initiative: number;
  hp: number;

  constructor() {
    this.listOfInitiatives = [];
  }

  ngOnInit() {
  }

  addToList(name: string, initiative: number, hp: number) {
    this.listOfInitiatives.push(new Character(name, initiative, hp));
    this.nameInput = '';
    this.initiative = undefined;
    this.hp = undefined;
  }

  removeFromList(c: Character) {
    for (let i = 0; i < this.listOfInitiatives.length; i++) {
      if (this.listOfInitiatives[i] === c) {
        this.listOfInitiatives.splice(i, 1);
      }
    }
  }

  sortByInitiative() {
    this.listOfInitiatives.sort((a, b) => b.initiative - a.initiative);
  }

  resetList() {
    this.listOfInitiatives = [];
  }
}
