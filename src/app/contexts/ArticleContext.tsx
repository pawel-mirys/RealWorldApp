import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

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
};

export const ArticleContext = createContext<{
  article: ArticleData;
  author: AuthorData;
  articleList: FetchedData['articles'];
} | null>(null);

export const useArticleContext = () => {
  const context = useContext(ArticleContext);
  return context;
};

export const ArticleContextProvider = ({ children }: ContextProps) => {
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

  useEffect(() => {
    (async () => {
      await axios.get<FetchedData>('https://api.realworld.io/api/articles').then((response) => {
        setArticleList(response.data.articles);
      });
    })();
  }, []);

  useEffect(() => {
    console.log(articleList);
  }, [articleList]);

  return (
    <ArticleContext.Provider
      value={{
        article,
        author,
        articleList,
      }}
    >
      {children}
    </ArticleContext.Provider>
  );
};
