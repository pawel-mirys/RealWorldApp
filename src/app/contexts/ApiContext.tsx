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
  tagList: string[];
  createdAt: string;
  favourtied: boolean;
  favoritesCount: number;
  author: AuthorData;
};

type ArticlePreview = {
  slug: string;
  title: string;
  description: string;
  tagList: string[];
  username: string;
  createdAt: string;
  favoritesCount: number;
  image: string;
};

type CommentData = {
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

type FetchedData = {
  articles: ArticleData[];
  articlesCount: number;
  tags: string[];
  comments: CommentData[];
};

const ApiContext = createContext<{
  articlepreview: ArticlePreview;
  author: AuthorData;
  articleList: FetchedData['articles'];
  popularTags: FetchedData['tags'];
  comments: FetchedData['comments'];
  updateArticlePreview: (
    slug: string,
    title: string,
    description: string,
    tagList: string[],
    username: string,
    createdAt: string,
    image: string,
    favoritesCount: number,
  ) => void;
} | null>(null);

export const ApiProvider = ({ children }: ContextProps) => {
  //setters

  const [author, setAuthor] = useState<AuthorData>({
    username: '',
    bio: '',
    image: '',
    following: false,
  });
  const [articlepreview, setArticlePreview] = useState<ArticlePreview>({
    slug: 'default',
    title: '',
    description: '',
    tagList: [],
    username: '',
    createdAt: '',
    image: '',
    favoritesCount: 0,
  });
  const [articleList, setArticleList] = useState<FetchedData['articles']>([]);
  const [popularTags, setPopularTags] = useState<FetchedData['tags']>([]);
  const [comments, setComments] = useState<FetchedData['comments']>([]);

  //requests

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

  useEffect(() => {
    (async () => {
      await axios
        .get<FetchedData>(`https://api.realworld.io/api/articles/${articlepreview.slug}/comments`)
        .then((response) => {
          setComments((prev) => (prev = response.data.comments));
        });
    })();
  }, [articlepreview.slug]);

  //methods

  const updateArticlePreview = (
    slug: string,
    title: string,
    description: string,
    tagList: string[],
    username: string,
    createdAt: string,
    image: string,
    favoritesCount: number,
  ) => {
    setArticlePreview(
      (prev) => (prev = { slug, title, description, tagList, username, createdAt, image, favoritesCount }),
    );
  };

  return (
    <ApiContext.Provider
      value={{
        articlepreview,
        author,
        articleList,
        popularTags,
        comments,
        updateArticlePreview,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};
