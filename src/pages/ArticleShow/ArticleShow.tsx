import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Button, Skeleton } from '@mui/material';
import {
  useAppSelector,
  useDeleteArticleMutation,
  useFetchArticlesBySlugQuery,
} from '../../store';
import ArticleShowHeader from './modules/ArticleShowHeader';
import ArticleShowFooter from './modules/ArticleShowFooter';
import clsx from 'clsx';
import TagsList from '../../components/TagsList/TagsList';
import ArticleShowComments from './modules/ArticleShowComments';
import ArticleForm from '../../components/ArticleForm/ArticleFormContainer';
import AlertDialog from '../../components/AlertDialog/AlertDialog';

const ArticleShow: React.FC = () => {
  const [isEditable, setIsEditable] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const { slug } = useParams<{ slug: string }>();
  const currentUserData = useAppSelector((state) => state.currentUserState);

  const { data, isFetching, error } = useFetchArticlesBySlugQuery({
    slug: slug!,
    token: currentUserData.token,
  });

  const [deleteArticle] = useDeleteArticleMutation();

  const navigate = useNavigate();

  if (isFetching) {
    return <Skeleton animation='wave' height={'300px'} />;
  }

  if (error) {
    return <div>Error while fetching data...</div>;
  }

  if (!data) {
    return null;
  }

  const { article } = data;

  const handleEditArticle = () => {
    setIsEditable((prev) => !prev);
  };

  const handleDeleteArticle = () => {
    setOpenDialog((prev) => !prev);
  };

  return (
    <Box>
      {!isEditable ? (
        <div className={clsx('article-show', 'flex flex-col gap-7 ')}>
          <ArticleShowHeader
            article={article}
            currentUserData={currentUserData}
            handleDeleteArticle={handleDeleteArticle}
            handleEditArticle={handleEditArticle}
          />
          <div className={clsx('content', 'w-4/6 m-auto text-lg')}>
            <p>{article.body}</p>
          </div>
          <div className={clsx('tags', 'w-4/6 m-auto')}>
            <TagsList
              data={article.tagList}
              isLoading={isFetching}
              error={error}
              disabled
            />
          </div>
          <ArticleShowFooter slug={data.article.slug} />
          <Button
            variant='contained'
            size='small'
            sx={{ position: 'sticky', top: 60 }}
            onClick={() => {
              navigate(-1);
            }}>
            back
          </Button>
          <ArticleShowComments slug={slug || ''} />
        </div>
      ) : (
        <div>
          <ArticleForm
            onCancel={handleEditArticle}
            slug={slug}
            articleData={{
              title: data.article.title,
              description: data.article.description,
              body: data.article.body,
              tagList: data.article.tagList,
            }}
          />
        </div>
      )}
      <AlertDialog
        isOpen={openDialog}
        dialogTitle='Are you sure?'
        dialogText='Do you really want to delete this article? This process cannot be undone.'
        agreeButtonText='Delete'
        disagreeButtonText='Cancel'
        onAgree={() => {
          setOpenDialog(false);
          deleteArticle({ slug: slug!, token: currentUserData.token });
          navigate('/');
        }}
        onDisagree={() => {
          setOpenDialog(false);
        }}
      />
    </Box>
  );
};

export default ArticleShow;
