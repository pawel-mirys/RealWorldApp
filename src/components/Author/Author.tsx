import clsx from 'clsx';
import styles from './Aythor.module.scss';

import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { Author as AuthorData } from '../../types';

type AuthorProps = {
  authorData: AuthorData;
  createdAt: string;
  className?: string;
  buttons?: boolean;
};

const Author: React.FC<AuthorProps> = ({
  authorData,
  createdAt,
  className,
  ...props
}) => {
  const navigate = useNavigate();

  const handleShowProfile = () => {
    navigate(`/profiles/${authorData.username}`);
  };

  const formattedDate = () => {
    const parseDate = new Date(createdAt);
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
        src={authorData.image}
        alt={`Author avatar ${authorData.username}`}
      />
      <div>
        <div
          onClick={() => {
            handleShowProfile();
          }}
          className='text-blue-500 hover:text-blue-400 cursor-pointer'>
          {authorData.username}
        </div>
        <div className='text-xs text-gray-500'>{formattedDate()}</div>
      </div>
    </div>
  );
};

export default Author;
