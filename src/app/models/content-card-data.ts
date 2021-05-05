export class ContentCardData {

  type: string;
  description: string;
  pictureUrl: string;
  pictureUrls: string[];

  deserialize(input: any): ContentCardData {
    if (input) {
      this.type = input.type;
      this.description = input.description;
      this.pictureUrl = input.pictureUrl;
      this.pictureUrls = input.pictureUrls;
    }

    return this;
  }
}
