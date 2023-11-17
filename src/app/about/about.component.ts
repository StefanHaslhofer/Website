import {Component, OnInit} from '@angular/core';
import {ContentCardData} from '../models/content-card-data';
import {ContentFileService} from '../service/content-file.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

  private aboutCardJson = 'aboutCards.json';

  public cards!: ContentCardData[];

  constructor(private contentFileService: ContentFileService) {
  }

  ngOnInit() {
    this.contentFileService.getCards(this.aboutCardJson).subscribe(contentCards => this.cards = contentCards);
  }
}
