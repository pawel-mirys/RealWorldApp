import { Box, Button } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';

import { FormInput } from 'app/ui/formInput/FormInput';
import styles from './AuthForm.module.scss';
type Inputs = {
  name: string;
  email: string;
  password: string;
};

type FormProps = {
  variant?: 'signIn' | 'signUp';
};

export const AuthForm = ({ variant }: FormProps) => {
  const { control, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { mt: 2, mb: 2, width: '20rem' },
      }}
      noValidate={false}
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
      className={styles.form}
    >
      <div className={styles.inputContainer}>
        <FormInput type="text" control={control} name="name" label="Name" />
      </div>
      {variant === 'signUp' && (
        <div className={styles.inputContainer}>
          <FormInput type="email" control={control} name="email" label="Email" />
        </div>
      )}
      <div className={styles.inputContainer}>
        <FormInput type="password" control={control} name="password" label="Password" />
      </div>
      <Button variant="contained" type="submit" className={styles.submit}>
        {variant === 'signUp' ? 'Sign Up' : 'Sign In'}
      </Button>
    </Box>
  );
};
