import {Component, OnInit} from '@angular/core';
import {ContentCardData} from '../models/content-card-data';
import {ContentFileService} from '../content-file.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  private aboutCardJson = 'aboutCards.json';

  public cards: ContentCardData[];

  constructor(private contentFileService: ContentFileService) {
  }

  ngOnInit() {
    this.contentFileService.getCards(this.aboutCardJson).subscribe(contentCards => this.cards = contentCards);
  }

}
