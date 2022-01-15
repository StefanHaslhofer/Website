import {Component, Input, OnInit} from '@angular/core';
import {ContentCredit} from '../models/content-credit';
import {ContentFileService} from '../service/content-file.service';

@Component({
  selector: 'app-content-credit',
  templateUrl: './content-credit.component.html',
  styleUrls: ['./content-credit.component.css']
})
export class ContentCreditComponent implements OnInit {

  @Input()
  public contentCredit: ContentCredit[];

  constructor(public contentFileService: ContentFileService) {
  }

  ngOnInit() {
  }

  public getIcon(iconName: string): string {
    return this.contentFileService.getIconUrl('', iconName);
  }

  public findPlatform(platformName: string): ContentCredit {
    return this.contentCredit.find(content => content.mediaPlatformName.toUpperCase() === platformName.toUpperCase());
  }
}
