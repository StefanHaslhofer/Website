import {Component, Input, OnInit} from '@angular/core';
import {ContentCardData} from '../models/content-card-data';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {

  @Input()
  cardData: ContentCardData;

  constructor() {
  }

  ngOnInit() {
  }

}
