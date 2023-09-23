import { Box, Button } from '@mui/material';
import clsx from 'clsx';

type FormProps = {
  handleSubmit: () => void;
  inputs: JSX.Element;
  submitButtonLabel?: string;
};

const Form: React.FC<FormProps> = ({
  inputs,
  handleSubmit,
  submitButtonLabel,
}) => {
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit();
  };
  return (
    <Box
      className={clsx('flex flex-col  max-w-xl')}
      component='form'
      sx={{
        '& .MuiTextField-root': { mt: 2, mb: 2, width: '20rem' },
      }}
      noValidate={false}
      autoComplete='off'
      onSubmit={handleFormSubmit}>
      {inputs}
      <Button variant='contained' type='submit' className=''>
        {submitButtonLabel ? submitButtonLabel : 'Submit'}
      </Button>
    </Box>
  );
};

export default Form;
