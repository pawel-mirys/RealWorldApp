import { useNavigate } from 'react-router-dom';
import ArticleForm from '../../components/ArticleForm/ArticleFormContainer';

const ArticleCreator = () => {
  const navigate = useNavigate();

  const onCancel = () => {
    navigate('/');
  };

  return <ArticleForm onCancel={onCancel} />;
};

export default ArticleCreator;
