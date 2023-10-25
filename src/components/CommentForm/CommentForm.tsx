import { useForm } from 'react-hook-form';
import FormInput from '../FormInput/FormInput';
import Form from '../Form/Form';
import { Avatar } from '@mui/material';

import { useAppSelector, useCreateCommentMutation } from '../../store';

type Inputs = {
  body: string;
};

type CommentFormProps = {
  slug: string;
};

const CommentForm: React.FC<CommentFormProps> = ({ slug }) => {
  const [createComment] = useCreateCommentMutation();
  const currentUserData = useAppSelector((state) => state.currentUserState);
  const { control, handleSubmit } = useForm<Inputs>();

  const handleAddComment = (inputsData: Inputs) => {
    console.log(slug);
    createComment({
      slug: slug,
      commentBody: inputsData,
      token: currentUserData.token,
    });
  };

  const commentInput = (
    <div className='h-full'>
      <FormInput
        sx={{ resize: 'both' }}
        control={control}
        type='text'
        name='body'
        label='Add Comment'
        multiline
        rows={4}
      />
    </div>
  );

  return (
    <div className='flex flex-row items-start gap-3 mt-5 w-full'>
      <Avatar />
      <Form
        inputs={commentInput}
        submitButtonLabel='Post comment'
        handleSubmit={handleSubmit(handleAddComment)}
      />
    </div>
  );
};

export default CommentForm;
