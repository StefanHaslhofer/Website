import {Component, OnInit} from '@angular/core';
import {ContentCardData} from '../models/content-card-data';
import {SiteContent} from '../models/site-content';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {

  siteContent: SiteContent;
  cardData: ContentCardData;

  constructor() { }

  ngOnInit() {
  }

}
