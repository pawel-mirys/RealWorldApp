import React from 'react';
import ArticlesList from '../../../components/ArticlesList/ArticlesList';
import { useFetchProfileArticlesQuery } from '../../../store';
import { User } from '../../../types';

type ProfileArticlesListProps = {
  username: string;
  currentUser: User;
};

const ProfileArticlesList: React.FC<ProfileArticlesListProps> = ({
  username,
  currentUser,
}) => {
  const { data, isFetching, error } = useFetchProfileArticlesQuery({
    author: username,
    token: currentUser.token,
  });

  return (
    <div className='w-5/6 m-auto'>
      <ArticlesList data={data} isFetching={isFetching} error={error} />
    </div>
  );
};

export default ProfileArticlesList;
