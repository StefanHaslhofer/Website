import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PictureTextCardComponent} from '../picture-text-card/picture-text-card.component';
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
