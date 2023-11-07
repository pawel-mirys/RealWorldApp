import React, { useState, useEffect } from 'react';
import FormInput from '../FormInput/FormInput';
import { useForm } from 'react-hook-form';
import Form from '../Form/Form';
import { Button } from '@mui/material';
import { DataToPublish } from '../../types';
import AlertDialog from '../AlertDialog/AlertDialog';

type ArticleFormContainerProps = {
  onCancel: () => void;
  articleData?: DataToPublish;
};

type InfoInputs = {
  title: string;
  description: string;
  body: string;
};

type TagsInput = {
  tag: string;
};

const ArticleFormContainer: React.FC<ArticleFormContainerProps> = ({
  onCancel,
  articleData,
}) => {
  const [publishData, setPublishData] = useState<DataToPublish>();
  const [tags, setTags] = useState<string[]>([]);
  const [openDialog, setOpenDialog] = useState(false);

  const {
    control: infoControl,
    handleSubmit,
    getValues: getInfoValues,
    setValue: setInfoValues,
    formState,
    setError,
  } = useForm<InfoInputs>();

  const {
    control: tagControl,
    handleSubmit: handleAddTag,
    getValues: getTagValue,
    setError: setTagError,
    reset: tagReset,
  } = useForm<TagsInput>();

  useEffect(() => {
    if (articleData) {
      setPublishData({
        ...articleData,
      });
      setInfoValues('title', articleData.title);
      setInfoValues('description', articleData.description);
      setInfoValues('body', articleData.body);
      if (articleData.tags !== null) {
        setTags([...articleData.tags]);
      }
    }
  }, [articleData, setInfoValues]);

  useEffect(() => {
    setPublishData({
      title: getInfoValues('title'),
      description: getInfoValues('description'),
      body: getInfoValues('body'),
      tags: tags,
    });
  }, [tags, publishData, getInfoValues]);

  const handlePublishArticle = () => {
    const { title, description, body } = getInfoValues();
    if (!title) {
      setError('title', {
        message: 'Title is required',
      });
    } else if (!description) {
      setError('description', {
        message: 'Description is required',
      });
    } else if (!body) {
      setError('body', {
        message: 'Body is required',
      });
    } else {
      console.log(publishData);
    }
  };

  const handleCreateTag = (tagInput: TagsInput) => {
    const { tag } = getTagValue();

    if (!tag) {
      setTagError('tag', { message: 'Tag field is required to add a tag' });
    } else if (tags.includes(tag)) {
      setTagError('tag', { message: 'This tag already exist' });
    } else {
      setTags((prev) => [...prev, tagInput.tag]);
      tagReset();
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    const updatedTags = tags.filter((tag) => tag !== tagToRemove);
    setTags(updatedTags);
  };

  const handleOnClose = () => {
    if (formState.dirtyFields) {
      setOpenDialog((prev) => !prev);
    } else {
      onCancel();
    }
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

  const infoInputs = (
    <div className='flex flex-col justify-center'>
      <FormInput
        type='text'
        control={infoControl}
        name='title'
        label='Article Title'
        defaultValue={articleData ? articleData.title : null}
      />
      <FormInput
        type='text'
        control={infoControl}
        name='description'
        label="What's this article about?"
        defaultValue={articleData ? articleData.description : null}
      />
      <FormInput
        type='text'
        control={infoControl}
        multiline
        minRows={5}
        name='body'
        label='Write your article'
        defaultValue={articleData ? articleData.body : null}
      />
    </div>
  );

  const tagInput = (
    <FormInput type='text' control={tagControl} name='tag' label='Add tag' />
  );

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
            onClick={handleOnClose}>
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
      <AlertDialog
        isOpen={openDialog}
        dialogTitle='Unsaved changes!'
        dialogText='You have unsaved changes on this page. Do you want to leave this page and discard your changes or stay on this page?'
        agreeButtonText='Leave'
        disagreeButtonText='Stay'
        onAgree={() => {
          onCancel();
          setOpenDialog(false);
        }}
        onDisagree={() => {
          setOpenDialog(false);
        }}
      />
    </div>
  );
};

export default ArticleFormContainer;
