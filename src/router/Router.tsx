import { Route, Routes } from 'react-router-dom';
import ArticlesList from '../components/ArticlesList/ArticlesList';
import ArticleShow from '../components/ArticleShow/ArticleShow';

const RouterSwitch = () => {
  return (
    <Routes>
      <Route path='/' element={<ArticlesList />} />
      <Route path='/article/:slug' element={<ArticleShow />} />
    </Routes>
  );
};

export default RouterSwitch;
