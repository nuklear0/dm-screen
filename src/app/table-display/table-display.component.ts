import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-table-display',
  templateUrl: './table-display.component.html',
  styleUrls: ['./table-display.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TableDisplayComponent implements OnInit {

  selected: string;
  externalUrl = '/dm-screen/assets/images/';
  internalUrl= '/assets/images/';

  constructor() {
  }

  ngOnInit() {
  }

}
