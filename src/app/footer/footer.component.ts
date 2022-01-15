import {Component, OnInit} from '@angular/core';
import {ContentCredit} from "../models/content-credit";
import {ContentFileService} from "../service/content-file.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  contentCredit: ContentCredit[] = [];

  constructor(private contentFileService: ContentFileService) {
  }

  ngOnInit() {
    this.contentFileService.getFooterContent().subscribe(footer => this.contentCredit = footer);
  }
}
