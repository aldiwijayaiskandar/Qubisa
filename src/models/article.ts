export interface Article {
  id: number;
  title: string;
  brief: string;
  created_date: string;
  imageUrlPreview: string;
  imageUrlPreview480: string;
  instructor: {
    id: number;
    name: string;
    qualification: string;
    introductionBrief: string;
    profession: string;
    skills: string;
    profilePic: string;
    userURL: string;
    isCorporate: boolean;
    totalreview: number;
    totalstudents: number;
    totalcourses: number;
    type: {
      id: number;
      name: string;
    };
    review: string;
    avgRatingScore: number;
    countRatingScore: number;
  };
  category: {
    id: number;
    name: string;
    color: string;
    icon_URL: string;
    categoryURL: string;
  };
  timeOfRead: number;
  url: string;
}
