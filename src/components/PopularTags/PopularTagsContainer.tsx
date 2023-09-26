import { SerializedError } from '@reduxjs/toolkit';
import { FetchedPopularTagsData } from '../../types';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { Button } from '@mui/material';
import { updateTagState, useAppDispatch } from '../../store';

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
  const dispatch = useAppDispatch();

  const handlePickTag = (e: React.MouseEvent<HTMLButtonElement>) => {
    const tagName = e.currentTarget.innerText;

    dispatch(updateTagState(tagName));
  };

  let content;

  if (isLoading) {
    content = <div>Loading tags...</div>;
  } else if (error) {
    content = <div>Error while loading tags...</div>;
  } else {
    content = data.map((tag) => {
      return (
        <Button
          key={tag}
          onClick={handlePickTag}
          size='small'
          sx={{
            fontSize: '10px',
            typography: {
              textTransform: 'none',
            },
          }}
          color='primary'>
          {tag}
        </Button>
      );
    });
  }

  return <>{content}</>;
};

export default PopularTagsContainer;
