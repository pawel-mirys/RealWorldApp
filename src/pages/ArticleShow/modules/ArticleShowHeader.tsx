import React from 'react';
import clsx from 'clsx';
import { ArticleData, User } from '../../../types';
import Author from '../../../components/Author/Author';
import { Button, ButtonGroup } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {
  useDislikeArticleMutation,
  useFetchProfileQuery,
  useFollowProfileMutation,
  useLikeArticleMutation,
  useUnfollowProfileMutation,
} from '../../../store';
import { useNavigate } from 'react-router-dom';
import useAuthStatus from '../../../hooks/useAuthStatus';

type ArticleShowHeaderProps = {
  article: ArticleData;
  currentUserData: User;
  handleEditArticle: () => void;
};

const ArticleShowHeader: React.FC<ArticleShowHeaderProps> = ({
  article,
  currentUserData,
  handleEditArticle,
}) => {
  const navigate = useNavigate();

  const { data: profileData } = useFetchProfileQuery({
    userName: article.author.username,
    token: currentUserData.token,
  });
  const [likeArticle] = useLikeArticleMutation();
  const [dislikeArticle] = useDislikeArticleMutation();

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
        {profileData?.profile.username !== currentUserData.username ? (
          <ButtonGroup>
            {!profileData?.profile.following ? (
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
            )}
            {!article.favorited ? (
              <Button
                variant='outlined'
                onClick={() => {
                  !isLoggedIn
                    ? navigate('/signin')
                    : likeArticle({
                        slug: article.slug,
                        token: currentUserData.token,
                      });
                }}>
                <FavoriteBorderOutlinedIcon sx={{ mr: '5px' }} /> Like Article{' '}
                {article.favoritesCount}
              </Button>
            ) : (
              <Button
                variant='contained'
                className='mr-5'
                onClick={() => {
                  dislikeArticle({
                    slug: article.slug,
                    token: currentUserData.token,
                  });
                }}>
                <FavoriteIcon sx={{ mr: '5px' }} /> Dislike Article
                {article.favoritesCount}
              </Button>
            )}
          </ButtonGroup>
        ) : (
          <ButtonGroup>
            <Button onClick={handleEditArticle}> Edit Article</Button>
            <Button color='warning'>Delete Article</Button>
          </ButtonGroup>
        )}
      </div>
    </header>
  );
};

export default ArticleShowHeader;
