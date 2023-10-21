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

export type AppState = {
  tagState: string | null;
};

export type User = {
  email: string;
  token: string;
  username: string;
  bio: string | null;
  image: string;
};

export type UpdateUserData = {
  email: string;
  password: string | null;
  username: string;
  bio: string | null;
  image: string;
};

export type UserLogin = {
  email: string;
  password: string;
};
