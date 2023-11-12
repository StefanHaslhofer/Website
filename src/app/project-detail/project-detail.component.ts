import {Component, OnInit} from '@angular/core';
import {SiteContent} from '../models/site-content';
import {ContentFileService} from '../service/content-file.service';
import {ProjectDetailState} from '../state/project-detail.state';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html'
})
export class ProjectDetailComponent implements OnInit {

  siteContent: SiteContent;

  constructor(private contentFileService: ContentFileService) {
  }

  ngOnInit() {
    // const fileUrl: string = this.store.selectSnapshot(ProjectDetailState.contentFile);
    // this.contentFileService.getSiteContent(fileUrl).subscribe(content => {
    //   this.siteContent = content;
    // });
  }
}
