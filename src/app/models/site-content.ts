import {ContentCardData} from './content-card-data';

export interface SiteContent {

  title: string;
  description: string;
  date: string;
  cards: ContentCardData[]; // display information about project via cards
}
