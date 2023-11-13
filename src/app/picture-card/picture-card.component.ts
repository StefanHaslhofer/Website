import {Component, Input, OnInit} from '@angular/core';
import {ContentCardData} from '../models/content-card-data';
import {ContentFileService} from '../service/content-file.service';
import {PhotoViewerComponent} from '../photo-viewer/photo-viewer.component';

@Component({
  selector: 'app-picture-card',
  templateUrl: './picture-card.component.html',
  styleUrls: ['./picture-card.component.scss']
})
export class PictureCardComponent implements OnInit {

  public pictures: string[] = [];

  @Input()
  cardData!: ContentCardData;

  constructor(private contentFileService: ContentFileService) {
  }

  ngOnInit() {
    this.cardData.pictureUrls?.forEach(pic => this.pictures.push(this.contentFileService.getPictureUrl(this.cardData.pictureFolder, pic)));
  }

  public openPhotoViewer(startIndex: number) {
    // const dialogRef = this.dialog.open(PhotoViewerComponent, {
    //   width: '100%',
    //   maxWidth: '90%',
    //   data: {pictures: this.pictures, startIndex},
    // });
  }
}
