import { SerializedError } from '@reduxjs/toolkit';
import { FetchedPopularTagsData } from '../../types';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { Button } from '@mui/material';

type PopularTagsContainerProps = {
  data: FetchedPopularTagsData['tags'];
  isLoading: boolean;
  error: FetchBaseQueryError | SerializedError | undefined;
};

const PopularTagsContainer: React.FC<PopularTagsContainerProps> = ({
  data,
  isLoading,
  error,
}) => {
  let content;

  if (isLoading) {
    content = <div>Loading tags...</div>;
  } else if (error) {
    content = <div>Error while loading tags...</div>;
  } else {
    content = data.map((tag) => {
      return (
        <Button
          size='small'
          sx={{ color: 'gray', fontSize: '10px' }}
          color='inherit'>
          {tag}
        </Button>
      );
    });
  }

  return <>{content}</>;
};

export default PopularTagsContainer;
