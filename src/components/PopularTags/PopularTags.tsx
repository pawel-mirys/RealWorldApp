import { useFetchPopularTagsQuery } from '../../store';
import PopularTagsContainer from './PopularTagsContainer';

const PopularTags = () => {
  const { data, isLoading, error } = useFetchPopularTagsQuery();

  const tags = data?.tags;

  return (
    <div className='flex flex-row flex-wrap w-1/6 h-2/5 gap-3 p-3 border-solid border-black border rounded mt-10'>
      <p className='block w-full'>Popular tags: </p>
      {tags && (
        <PopularTagsContainer data={tags} isLoading={isLoading} error={error} />
      )}
    </div>
  );
};

export default PopularTags;
