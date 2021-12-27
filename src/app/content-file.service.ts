import {Injectable} from '@angular/core';
import {ContentCardData} from './models/content-card-data';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContentFileService {

  private cards: ContentCardData[] = [];

  constructor(private http: HttpClient) {
  }

  // load json data via http-cient
  public getJSON(jsonUrl: string): Observable<any> {
    return this.http.get('assets/content/' + jsonUrl);
  }

  public getCards(jsonUrl: string): Observable<ContentCardData[]> {
    return this.getJSON(jsonUrl).pipe(map((data: any[]) => data.map(card => new ContentCardData().deserialize(card))));
  }
}
