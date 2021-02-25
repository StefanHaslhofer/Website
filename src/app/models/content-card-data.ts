export class ContentCardData {

  description: string;
  pictureUrl: string;

  deserialize(input: any): ContentCardData {
    if (input) {
      this.description = input.description;
      this.pictureUrl = input.pictureUrl;
    }

    return this;
  }
}
