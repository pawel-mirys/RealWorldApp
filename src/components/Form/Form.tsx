import { Box, Button } from '@mui/material';
import clsx from 'clsx';

type FormProps = {
  handleSubmit: () => void;
  inputs: JSX.Element | JSX.Element[];
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
      className={clsx('flex flex-col')}
      component='form'
      sx={{
        width: '100%',
        '& .MuiTextField-root': { mt: 2, mb: 2, width: '100%' },
      }}
      noValidate={false}
      autoComplete='on'
      onSubmit={handleFormSubmit}>
      {inputs}
      <Button variant='contained' type='submit' className=''>
        {submitButtonLabel ? submitButtonLabel : 'Submit'}
      </Button>
    </Box>
  );
};

export default Form;
