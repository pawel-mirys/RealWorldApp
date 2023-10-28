import React from 'react';
import clsx from 'clsx';
import { ArticleData, User } from '../../../types';
import Author from '../../../components/Author/Author';
import { Button, ButtonGroup } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {
  useFetchProfileQuery,
  useFollowProfileMutation,
  useUnfollowProfileMutation,
} from '../../../store';
import { useNavigate } from 'react-router-dom';
import useAuthStatus from '../../../hooks/useAuthStatus';

type ArticleShowHeaderProps = {
  article: ArticleData;
  currentUserData: User;
};

const ArticleShowHeader: React.FC<ArticleShowHeaderProps> = ({
  article,
  currentUserData,
}) => {
  const navigate = useNavigate();
  const { data: profileData } = useFetchProfileQuery({
    userName: article.author.username,
    token: currentUserData.token,
  });

  const [followProfile] = useFollowProfileMutation();
  const [unfollowProfile] = useUnfollowProfileMutation();
  const isLoggedIn = useAuthStatus();

  return (
    <header
      className={clsx(
        'article-header',
        'flex flex-col gap-10 bg-zinc-700 py-7'
      )}>
      <h2 className={clsx('text-4xl font-bold text-gray-200 w-4/6 m-auto')}>
        {article.title}
      </h2>
      <div className='flex flex-row items-center gap-5 w-4/6 m-auto'>
        {profileData && (
          <Author
            authorData={profileData.profile}
            createdAt={article.createdAt}
          />
        )}
        <ButtonGroup>
          {profileData?.profile.username !== currentUserData.username &&
            (!profileData?.profile.following ? (
              profileData && (
                <Button
                  variant='outlined'
                  onClick={() => {
                    !isLoggedIn
                      ? navigate('/signin')
                      : followProfile({
                          userName: profileData.profile.username,
                          token: currentUserData.token,
                        });
                  }}>
                  <AddIcon /> Follow {profileData.profile.username}
                </Button>
              )
            ) : (
              <Button
                variant='contained'
                onClick={() => {
                  unfollowProfile({
                    userName: profileData.profile.username,
                    token: currentUserData.token,
                  });
                }}>
                <RemoveIcon /> Unfollow {profileData.profile.username}
              </Button>
            ))}
          <Button>
            {article.favourtied ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            Like Article {`(${article.favoritesCount})`}
          </Button>
        </ButtonGroup>
      </div>
    </header>
  );
};

export default ArticleShowHeader;
