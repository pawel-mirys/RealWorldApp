import clsx from 'clsx';
import { Article } from '../../../types';
import Author from '../../../components/Author/Author';


type ArticleShowHeaderProps = {
  article: Article;
};

const ArticleShowHeader: React.FC<ArticleShowHeaderProps> = ({
  article,
  ...props
}) => {
  return (
    <header
      {...props}
      className={clsx(
        'article-header',
        'flex flex-col gap-10 bg-zinc-700 py-7'
      )}>
      <h2 className={clsx('text-5xl font-bold text-gray-200 w-5/6 m-auto ')}>
        {article.title}
      </h2>
      <Author article={article} buttons className='w-5/6 m-auto' />
    </header>
  );
};
export default ArticleShowHeader;
