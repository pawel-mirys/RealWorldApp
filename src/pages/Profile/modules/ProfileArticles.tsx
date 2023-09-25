import ArticlesList from '../../../components/ArticlesList/ArticlesList';
import { useFetchProfileArticlesQuery } from '../../../store';

type ProfileArticlesList = {
  username: string;
};

const ProfileArticlesList: React.FC<ProfileArticlesList> = ({ username }) => {
  const { data, isFetching, error } = useFetchProfileArticlesQuery(username);

  return (
    <div className='w-5/6 m-auto'>
      <ArticlesList data={data} isFetching={isFetching} error={error} />
    </div>
  );
};

export default ProfileArticlesList;
