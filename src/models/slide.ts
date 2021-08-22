export interface Slide {
  mainImageID: number;
  title: string;
  url: string;
  sort: number;
  imageURL: {
    desktop: string;
    mobile: string;
  };
}
