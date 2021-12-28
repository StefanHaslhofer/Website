import {Component, Input, OnInit} from '@angular/core';
import {ContentCardData} from '../models/content-card-data';
import {ContentFileService} from "../service/content-file.service";

@Component({
  selector: 'app-picture-card',
  templateUrl: './picture-card.component.html',
  styleUrls: ['./picture-card.component.scss']
})
export class PictureCardComponent implements OnInit {

  public pictures: string[] = [];

  @Input()
  cardData: ContentCardData;

  constructor(private contentFileService: ContentFileService) {
  }

  ngOnInit() {
    this.cardData.pictureUrls.forEach(pic => this.pictures.push(this.contentFileService.getPictureUrl(this.cardData.pictureFolder, pic)));
  }

}
