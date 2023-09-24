import ArticlesList from '../../../components/ArticlesList/ArticlesList';
import { useFetchProfileArticlesQuery } from '../../../store';

type ProfileArticlesList = {
  username: string;
};

const ProfileArticlesList: React.FC<ProfileArticlesList> = ({ username }) => {
  const { data, isFetching, error } = useFetchProfileArticlesQuery(username);

  return <ArticlesList data={data} isFetching={isFetching} error={error} />;
};

export default ProfileArticlesList;
