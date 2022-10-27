import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

export const useApiContext = () => {
  const context = useContext(ApiContext);
  return context;
};

type ContextProps = {
  children: JSX.Element | React.ReactElement;
};

type AuthorData = {
  username: string;
  bio: string | null;
  image: string;
  following: boolean;
};

type ArticleData = {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  favourtied: boolean;
  favoritesCount: number;
  author: AuthorData;
};

type FetchedData = {
  articles: ArticleData[];
  articlesCount: number;
  tags: string[];
};

const ApiContext = createContext<{
  article: ArticleData;
  author: AuthorData;
  articleList: FetchedData['articles'];
  popularTags: FetchedData['tags'];
} | null>(null);

export const ApiProvider = ({ children }: ContextProps) => {
  const [author, setAuthor] = useState<AuthorData>({
    username: '',
    bio: '',
    image: '',
    following: false,
  });
  const [article, setArticle] = useState<ArticleData>({
    slug: '',
    title: '',
    description: '',
    body: '',
    tagList: [],
    createdAt: '',
    updatedAt: '',
    favourtied: false,
    favoritesCount: 0,
    author: author,
  });
  const [articleList, setArticleList] = useState<FetchedData['articles']>([]);
  const [popularTags, setPopularTags] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      await axios.get<FetchedData>('https://api.realworld.io/api/articles').then((response) => {
        setArticleList((prev) => (prev = response.data.articles));
      });
    })();
  }, []);

  useEffect(() => {
    (async () => {
      await axios.get<FetchedData>('https://api.realworld.io/api/tags').then((response) => {
        setPopularTags((prev) => (prev = response.data.tags));
      });
    })();
  }, []);

  return (
    <ApiContext.Provider
      value={{
        article,
        author,
        articleList,
        popularTags,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};
