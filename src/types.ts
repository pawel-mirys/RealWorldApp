export type Author = {
  username: string;
  bio: string | null;
  image: string;
  following: boolean;
};

export type ArticleData = {
  slug: string;
  title: string;
  body: string;
  description: string;
  tagList: string[];
  createdAt: string;
  favourtied: boolean;
  favoritesCount: number;
  author: Author;
};

export type Comment = {
  id: number;
  createdAt: string;
  updatedAt: string;
  body: string;
  author: Author;
};

export type FetchedCommentData = {
  comments: Comment[];
};

export type FetchedArticlesData = {
  articles: ArticleData[];
  articlesCount: number;
};

export type FetchedAuthorData = {
  profile: Author;
};

export type FetchedPopularTagsData = {
  tags: string[];
};

export interface AppState {
  tagState: string | null;
}
