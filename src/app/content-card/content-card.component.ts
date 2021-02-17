import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {

  //TODO determine conent card type by parameter given in json coming from parent div
  //@Input()
  //contentType: ContentType = ContenType.BASIC;

  @Input()
  description: string;

  constructor() {
  }

  ngOnInit() {
  }

}
