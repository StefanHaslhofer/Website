import { Component, OnInit } from '@angular/core';
import {ContentCardData} from '../models/content-card-data';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  // url to json file which includes the card data on the page
  private _aboutCardJsonURL = 'assets/content/projectCards.json';

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
