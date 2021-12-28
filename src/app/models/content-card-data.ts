export class ContentCardData {

  type: string;
  description: string;
  pictureUrl?: string;
  pictureUrls?: string[];
  pictureFolder: string; // instead of single pictureUrls the whole source-folder can be provided
  title: string;
  direction?: string;
  contentFile: string;

  deserialize(input: any): ContentCardData {
    if (input) {
      this.type = input.type;
      this.description = input.description;
      this.pictureUrl = input.pictureUrl;
      this.pictureUrls = input.pictureUrls;
      this.title = input.title;
      this.direction = input.direction;
      this.contentFile = input.contentFile;
    }

    return this;
  }
}
