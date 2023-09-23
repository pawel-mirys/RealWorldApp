import clsx from 'clsx';
import styles from './Aythor.module.scss';
import { Article } from '../../types';
import { Button, ButtonGroup } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { useFetchUserQuery } from '../../store';

type AuthorProps = {
  article: Article;
  className?: string;
  buttons?: boolean;
};

const Author: React.FC<AuthorProps> = ({
  article,
  className,
  buttons,
  ...props
}) => {
  const { data } = useFetchUserQuery(article.author.username);

  const profile = data?.profile;

  const navigate = useNavigate();

  const handleShowProfile = (username: string) => {
    console.log(profile);
    navigate(`/profiles/${username}`);
  };

  const formattedDate = () => {
    const parseDate = new Date(article.createdAt);
    const formatDate = format(parseDate, 'dd/MM/yyyy');
    return formatDate;
  };

  return (
    <div
      {...props}
      className={clsx(
        styles.author,
        className,
        'author flex flex-row items-center gap-2'
      )}>
      <img
        className={clsx(styles.avatar)}
        src={article.author.image}
        alt={`Author avatar ${article.author.username}`}
      />
      <div>
        <div
          onClick={() => {
            profile && handleShowProfile(profile?.username);
          }}
          className='text-blue-500 hover:text-blue-400 cursor-pointer'>
          {article.author.username}
        </div>
        <div className='text-xs text-gray-500'>{formattedDate()}</div>
      </div>
      {buttons && (
        <ButtonGroup>
          <Button>
            <AddIcon /> Follow {article.author.username}
          </Button>
          <Button>
            {article.favourtied ? <FavoriteBorderIcon /> : <FavoriteIcon />}
            Like Article {`(${article.favoritesCount})`}
          </Button>
        </ButtonGroup>
      )}
    </div>
  );
};

export default Author;
