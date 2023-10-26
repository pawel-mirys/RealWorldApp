import clsx from 'clsx';
import { Comment } from '../../types';
import Author from '../Author/Author';
import { useAppSelector, useDeleteCommentMutation } from '../../store';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';

type ArticleCommentProps = {
  data: Comment;
  slug: string;
};

const ArticleComment: React.FC<ArticleCommentProps> = ({ data, slug }) => {
  const currentUserData = useAppSelector((state) => state.currentUserState);
  const [deleteComment] = useDeleteCommentMutation();

  const handleDeleteComment = () => {
    deleteComment({
      slug: slug,
      commentId: data.id,
      token: currentUserData.token,
    });
  };

  return (
    <div
      className={clsx(
        'comment',
        'flex flex-col items-start gap-5 border border-gray-400 rounded mt-5'
      )}>
      <div className={clsx('comment-content text-sm p-3')}>{data.body}</div>
      <div className='flex flex-row justify-between border-t border-gray-300 w-full p-3 bg-zinc-100'>
        <Author authorData={data.author} createdAt={data.createdAt} />
        {currentUserData.username === data.author.username && (
          <Button onClick={handleDeleteComment}>
            <DeleteIcon />
          </Button>
        )}
      </div>
    </div>
  );
};

export default ArticleComment;
