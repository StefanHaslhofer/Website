import {Component, OnInit} from '@angular/core';
import {ContentCardData} from '../models/content-card-data';
import {ContentFileService} from '../service/content-file.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html'
})
export class ProjectComponent implements OnInit {

  // url to json file which includes the card data on the page
  private projectCardJson = 'projectCards.json';

  public cards: ContentCardData[] = [];

  constructor(private contentFileService: ContentFileService) {
  }

  ngOnInit() {
    this.contentFileService.getCards(this.projectCardJson).subscribe(contentCards => this.cards = contentCards);
  }

}
