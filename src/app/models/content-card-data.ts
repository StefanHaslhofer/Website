import {ContentCredit} from './content-credit';

export class ContentCardData {

  type = "";
  description= "";
  pictureUrl?: string;
  pictureUrls?: string[];
  pictureFolder= ""; // instead of single pictureUrls the whole source-folder can be provided
  title= "";
  direction?: string;
  contentFile= "";
  contentCredit?: ContentCredit[];
  backgroundColor?: string;

  deserialize(input: any): ContentCardData {
    if (input) {
      this.type = input.type;
      this.description = input.description;
      this.pictureUrl = input.pictureUrl;
      this.pictureUrls = input.pictureUrls;
      this.title = input.title;
      this.direction = input.direction;
      this.contentFile = input.contentFile;
      this.contentCredit = input.contentCredit;
      this.backgroundColor = input.backgroundColor;
    }

    return this;
  }
}
