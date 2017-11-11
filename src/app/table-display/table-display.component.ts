import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-table-display',
  templateUrl: './table-display.component.html',
  styleUrls: ['./table-display.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TableDisplayComponent implements OnInit {

  source: string;

  constructor() {
  }

  ngOnInit() {
  }

  setSource(source: string) {
    this.source = source;
  }

  getSource() {
    return './images/' + this.source + '.jpg';
  }

}
