import {ContentCredit} from './content-credit';

export interface ContentCardData {

  type: string;
  description: string;
  pictureUrl?: string;
  pictureUrls?: string[];
  pictureFolder: string; // instead of single pictureUrls the whole source-folder can be provided
  title: string;
  direction?: string;
  contentFile:string;
  contentCredit?: ContentCredit[];
  backgroundColor?: string;
}
