import {ContentCardData} from './content-card-data';

export class SiteContent {

  title = "";
  description = "";
  date = "";
  cards: ContentCardData[] = []; // display information about project via cards

  deserialize(input: any): SiteContent {
    if (input) {
      this.title = input.title;
      this.description = input.description;
      this.date = input.date;
      this.cards = input.cards;
    }

    return this;
  }
}
