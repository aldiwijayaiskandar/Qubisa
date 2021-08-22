export interface Content {
  id: number;
  title: string;
  imageURL: string;
  isMicrolearning: boolean;
  contentURL: string;
  isNewest: boolean;
  date: string;
  totalContents: number;
  hitRate: number;
  totalTime: string;
  program: string;
  type: {
    id: 1;
    name: string;
    color: string;
    imageURL: string;
  };
  instructors: [
    {
      id: number;
      name: string;
      userURL: string;
      profilePic: string;
      type: {
        id: number;
        name: string;
      };
    },
  ];
  rating: {
    avgRatingScore: number;
    countRatingScore: number;
  };
  price: {
    id: number;
    name: string;
    priceafter: string;
    priceAfterInt: number;
    discountPercentage: string;
    discountDayString: string;
    discountDays: number;
    productID: string;
    discountProductID: string;
  };
  isLive: boolean;
  isJoin: boolean;
  status: string;
  isCertificate: boolean;
  totalLike: number;
  brief: string;
  skillLevel: {
    id: number;
    name: string;
    url: string;
    color: string;
  };
  productSpecialID: string;
  pointScore: number;
  lastUpdated: string;
}
