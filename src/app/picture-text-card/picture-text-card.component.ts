import {Component, Input, OnInit} from '@angular/core';
import {ContentCardData} from '../models/content-card-data';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from "@ngxs/store";
import {PatchProjectDetail} from "../state/project-detail.action";

@Component({
  selector: 'app-picture-text-card',
  templateUrl: './picture-text-card.component.html',
  styleUrls: ['./picture-text-card.component.scss']
})
export class PictureTextCardComponent implements OnInit {

  @Input()
  cardData: ContentCardData;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private store: Store) {
  }

  ngOnInit() {
  }

  async loadProjectOverview(title: string) {
    await this.store.dispatch(new PatchProjectDetail({contentFile: this.cardData.contentFile}));
    this.router.navigate([title], {relativeTo: this.activatedRoute});
  }

}
