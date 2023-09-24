export type Author = {
  username: string;
  bio: string | null;
  image: string;
  following: boolean;
};

export type Article = {
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
  author: {
    username: string;
    bio: string;
    image: string;
    following: boolean;
  };
};

export type FetchedArticlesData = {
  articles: Article[];
  articlesCount: number;
};

export type FetchedAuthorData = {
  profile: Author;
};
