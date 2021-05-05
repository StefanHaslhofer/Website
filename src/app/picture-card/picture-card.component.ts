import {Component, Input, OnInit} from '@angular/core';
import {ContentCardData} from '../models/content-card-data';

@Component({
  selector: 'app-picture-card',
  templateUrl: './picture-card.component.html',
  styleUrls: ['./picture-card.component.scss']
})
export class PictureCardComponent implements OnInit {

  @Input()
  cardData: ContentCardData;

  constructor() { }

  ngOnInit() {
  }

}
