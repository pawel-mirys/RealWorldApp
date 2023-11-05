import FormInput from '../FormInput/FormInput';
import { useForm } from 'react-hook-form';
import Form from '../Form/Form';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { DataToPublish } from '../../types';

type ArticleFormProps = {
  onCancel: () => void;
};

type InfoInputs = {
  title: string;
  description: string;
  body: string;
};

type TagsInput = {
  tag: string;
};

const ArticleForm: React.FC<ArticleFormProps> = ({ onCancel }) => {
  const [publishData, setPublishData] = useState<DataToPublish>();

  const [tags, setTags] = useState<string[]>([]);

  const {
    control: infoControl,
    handleSubmit,
    getValues: getInfoValues,
  } = useForm<InfoInputs>();

  const {
    control: tagControl,
    handleSubmit: handleAddTag,
    reset: tagReset,
  } = useForm<TagsInput>();

  const infoInputs = (
    <div className='flex flex-col justify-center'>
      <FormInput
        type='text'
        control={infoControl}
        name='title'
        label='Article Title'
      />
      <FormInput
        type='text'
        control={infoControl}
        name='description'
        label="What's this article about?"
      />
      <FormInput
        type='text'
        control={infoControl}
        multiline
        minRows={5}
        name='body'
        label='Write your article'
      />
    </div>
  );

  const tagInput = (
    <FormInput type='text' control={tagControl} name='tag' label='Add tag' />
  );

  useEffect(() => {
    setPublishData({
      title: getInfoValues('title'),
      description: getInfoValues('description'),
      body: getInfoValues('body'),
      tags: tags,
    });
  }, [tags, getInfoValues]);

  const handlePublishArticle = () => {
    console.log(publishData);
  };
  const handleCreateTag = (tagInput: TagsInput) => {
    setTags((prev) => [...prev, tagInput.tag]);
    tagReset();
  };

  const handleRemoveTag = (tagToRemove: string) => {
    const updatedTags = tags.filter((tag) => tag !== tagToRemove);
    setTags(updatedTags);
  };

  const tagsToRender = () => {
    const tagsList = tags.map((tag) => {
      return (
        <Button
          key={tag}
          onClick={() => {
            handleRemoveTag(tag);
          }}
          size='small'
          sx={{
            fontSize: '12px',
            typography: {
              textTransform: 'none',
            },
          }}
          color='primary'>
          {tag}
        </Button>
      );
    });
    return tagsList;
  };

  return (
    <div className='h-screen w-3/6 m-auto'>
      <div className='flex flex-row gap-4'>
        <div className='flex flex-col gap-3 w-3/5 '>
          <Form
            inputs={infoInputs}
            submitButtonLabel='Publish article'
            handleSubmit={handleSubmit(handlePublishArticle)}
          />
          <Button
            className='w-full'
            color='warning'
            variant='contained'
            onClick={onCancel}>
            Cancel
          </Button>
        </div>
        <div className=' w-2/5'>
          <Form
            inputs={tagInput}
            submitButtonLabel='Add tag'
            handleSubmit={handleAddTag(handleCreateTag)}
          />
          <div className='taglist mt-2 border rounded p-2 border-gray-400'>
            Tags:{tagsToRender()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleForm;
