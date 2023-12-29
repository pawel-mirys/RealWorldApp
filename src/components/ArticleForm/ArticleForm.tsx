import { DataToPublish } from '../../types';
import ArticleFormContainer from './ArticleFormContainer';

type ArticleFormProps = {
  onCancel: () => void;
  articleData?: DataToPublish;
  slug?: string;
};

const ArticleForm: React.FC<ArticleFormProps> = (props) => {
  return <ArticleFormContainer {...props} />;
};

export default ArticleForm;
