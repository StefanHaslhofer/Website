import {Component, Input, OnInit} from '@angular/core';
import {ContentCardData} from '../models/content-card-data';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-picture-text-card',
  templateUrl: './picture-text-card.component.html',
  styleUrls: ['./picture-text-card.component.scss']
})
export class PictureTextCardComponent implements OnInit {

  @Input()
  cardData!: ContentCardData;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
  }

  async loadProjectOverview(title: string) {
    // await this.store.dispatch(new PatchProjectDetail({contentFile: this.cardData.contentFile}));
    await this.router.navigate([title], {relativeTo: this.activatedRoute});
  }

}
