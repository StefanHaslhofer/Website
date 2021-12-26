export class ContentCardData {

  type: string;
  description: string;
  pictureUrl: string;
  pictureUrls: string[];
  title: string;
  direction?: string;
  cards: ContentCardData[]; // display information about project via cards

  deserialize(input: any): ContentCardData {
    if (input) {
      this.type = input.type;
      this.description = input.description;
      this.pictureUrl = input.pictureUrl;
      this.pictureUrls = input.pictureUrls;
      this.title = input.title;
      this.direction = input.direction;
      this.cards = input.cards;
    }

    return this;
  }
}
