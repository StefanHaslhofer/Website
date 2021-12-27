import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ContentCardData} from '../models/content-card-data';
import {SiteContent} from '../models/site-content';
import {ContentFileService} from '../service/content-file.service';
import {Store} from '@ngxs/store';
import {ProjectDetailState} from '../state/project-detail.state';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {

  siteContent: SiteContent;

  constructor(private contentFileService: ContentFileService, private store: Store) {
  }

  ngOnInit() {
    const fileUrl: string = this.store.selectSnapshot(ProjectDetailState.contentFile);
    this.contentFileService.getSiteContent(fileUrl).subscribe(content => {
      this.siteContent = content;
    });
  }
}
