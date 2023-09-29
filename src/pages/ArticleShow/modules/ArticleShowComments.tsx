import clsx from 'clsx';
import ArticleComment from '../../../components/ArticleComment/ArticleComment';
import { useFetchArticleCommentsQuery } from '../../../store';

type ArticleShowCommentsProps = {
  slug: string;
};

const ArticleShowComments: React.FC<ArticleShowCommentsProps> = ({ slug }) => {
  const { data, isFetching, error } = useFetchArticleCommentsQuery(slug);

  let content;

  if (isFetching) {
    content = <div>Loading comments...</div>;
  } else if (error) {
    content = <div>Error while loading comments...</div>;
  } else {
    content = data?.comments.map((comment) => {
      return (
        <div className={clsx('comments', 'flex flex-col w-2/5 m-auto')}>
          <ArticleComment data={comment} />
        </div>
      );
    });
  }
  return <div>{content}</div>;
};

export default ArticleShowComments;
