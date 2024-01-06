import { useForm } from 'react-hook-form';
import FormInput from '../FormInput/FormInput';
import Form from '../Form/Form';
import { Avatar } from '@mui/material';

import { useAppSelector, useCreateCommentMutation } from '../../store';

type Inputs = {
  body: string | null;
};

type CommentFormProps = {
  slug: string;
};

const CommentForm: React.FC<CommentFormProps> = ({ slug }) => {
  const [createComment] = useCreateCommentMutation();
  const currentUserData = useAppSelector((state) => state.currentUserState);
  const { control, handleSubmit, getValues, setError, reset } =
    useForm<Inputs>();

  const handleAddComment = (inputsData: Inputs) => {
    const { body } = getValues();

    const clearInput = () => {
      reset({ body: null });
    };

    if (!body) {
      setError('body', { message: "Comment field can't be empty" });
    } else {
      createComment({
        slug: slug,
        commentBody: inputsData,
        token: currentUserData.token,
      })
        .unwrap()
        .then(clearInput);
    }
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
        defaultValue={null}
      />
    </div>
  );

  return (
    <div className='flex flex-col items-center lg:flex-row lg:items-start gap-3 mt-5 w-full'>
      <Avatar src={currentUserData.image} />
      <Form
        inputs={commentInput}
        submitButtonLabel='Post comment'
        handleSubmit={handleSubmit(handleAddComment)}
      />
    </div>
  );
};

export default CommentForm;
