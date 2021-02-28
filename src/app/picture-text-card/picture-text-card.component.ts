import {Component, Input, OnInit} from '@angular/core';
import {ContentCardData} from '../models/content-card-data';

@Component({
  selector: 'app-picture-text-card',
  templateUrl: './picture-text-card.component.html',
  styleUrls: ['./picture-text-card.component.scss']
})
export class PictureTextCardComponent implements OnInit {

  @Input()
  cardData: ContentCardData;

  constructor() {
  }

  ngOnInit() {
  }

}
