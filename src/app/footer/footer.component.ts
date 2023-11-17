import {Component, Input, OnInit} from '@angular/core';
import {ContentCredit} from "../models/content-credit";
import {ContentFileService} from "../service/content-file.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer-component.scss']
})
export class FooterComponent implements OnInit {

  @Input()
  public imgHeight = 24;

  public contentCredit!: ContentCredit[];

  constructor(private contentFileService: ContentFileService) {
  }

  ngOnInit() {
    this.contentFileService.getFooterContent().subscribe(footer => this.contentCredit = footer);
  }

  public getIcon(iconName: string): string {
    return this.contentFileService.getIconUrl('', iconName);
  }

  public findPlatform(platformName: string): ContentCredit | undefined {
    return this.contentCredit.find(content => content.mediaPlatformName.toUpperCase() === platformName.toUpperCase());
  }
}
