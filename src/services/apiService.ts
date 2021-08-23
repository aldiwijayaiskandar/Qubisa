import {Article, Slide, Topic, Content} from '../models';
import {get} from './base';

export const getSlide = async (): Promise<Slide[]> => {
  const data = await get('Testing/slide/v2');

  return data?.mainimages as Slide[];
};

export const getPopularArticleTopic = async (): Promise<Topic[]> => {
  const data = await get('Testing/article/category');

  return data?.categories;
};

export const getArticle = async (): Promise<Article[]> => {
  const data = await get('Testing/Article');

  return data?.articles;
};

export const getMicrolearning = async (): Promise<Content[]> => {
  const data = await get('Testing/content');

  return data?.contents;
};
