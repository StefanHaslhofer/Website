import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PictureTextCardComponent} from '../picture-text-card/picture-text-card.component';
import {ContentCardData} from '../models/content-card-data';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

// url to json file which includes the card data on the page
  private _aboutCardJsonURL = 'assets/content/aboutCards.json';

  private cards: ContentCardData[] = [];

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(cards => {
      // we get a card array out of the json
      // therefore we need to call deserialize for every card
      for (const card of cards) {
        this.cards.push(new ContentCardData().deserialize(card));
      }
    });
  }

  // load json data via http-cient
  public getJSON(): Observable<any> {
    return this.http.get(this._aboutCardJsonURL);
  }

  ngOnInit() {
  }

}
