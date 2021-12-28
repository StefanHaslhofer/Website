import {Injectable} from '@angular/core';
import {ContentCardData} from '../models/content-card-data';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {SiteContent} from '../models/site-content';

@Injectable({
  providedIn: 'root'
})
export class ContentFileService {

  resourceBaseUrl = 'assets/content/';
  pictureBaseUrl = 'assets/pictures/';

  constructor(private http: HttpClient) {
  }

  // load json data via http-cient
  private getJSON(jsonUrl: string): Observable<any> {
    return this.http.get(this.resourceBaseUrl + jsonUrl);
  }

  public getCards(jsonUrl: string): Observable<ContentCardData[]> {
    return this.getJSON(jsonUrl).pipe(map((data: any[]) => data.map(card => new ContentCardData().deserialize(card))));
  }

  public getSiteContent(jsonUrl: string): Observable<SiteContent> {
    return this.getJSON(jsonUrl).pipe(map((data: any) => new SiteContent().deserialize(data)));
  }

  public getPictureUrl(dir: string, file: string): string {
    return this.pictureBaseUrl + dir + file;
  }
}
