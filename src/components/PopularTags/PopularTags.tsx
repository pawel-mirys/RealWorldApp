import clsx from 'clsx';
import { useFetchPopularTagsQuery } from '../../store';
import TagsList from '../TagsList/TagsList';

type PopularTagsProps = {
  className?: string;
};

const PopularTags: React.FC<PopularTagsProps> = ({ className }) => {
  const { data, isLoading, error } = useFetchPopularTagsQuery();

  const tags = data?.tags;

  return (
    <div
      className={clsx(
        className,
        'flex flex-row flex-wrap  h-2/5 gap-3 p-3 border-solid border-black border rounded mt-10'
      )}>
      <p className='block w-full'>Popular tags: </p>
      {tags && <TagsList data={tags} isLoading={isLoading} error={error} />}
    </div>
  );
};

export default PopularTags;
