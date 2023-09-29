import clsx from 'clsx';
import { Comment } from '../../types';
import Author from '../Author/Author';

type ArticleCommentProps = {
  data: Comment;
};

const ArticleComment: React.FC<ArticleCommentProps> = ({ data }) => {
  return (
    <div
      className={clsx(
        'comment',
        'flex flex-col items-start gap-5 border border-gray-400 rounded mt-5'
      )}>
      <div className={clsx('comment-content text-sm p-3')}>{data.body}</div>
      <div className='border-t border-gray-300 w-full p-3 bg-zinc-100'>
        <Author authorData={data.author} createdAt={data.createdAt} />
      </div>
    </div>
  );
};

export default ArticleComment;
