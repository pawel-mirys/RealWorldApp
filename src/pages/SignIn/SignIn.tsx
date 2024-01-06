import { useCallback, useEffect } from 'react';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useLoginUserMutation, setToken } from '../../store';
import Form from '../../components/Form/Form';
import FormInput from '../../components/FormInput/FormInput';

type Inputs = {
  email: string;
  password: string;
};

const SignIn = () => {
  const { control, handleSubmit, getValues, setError } = useForm<Inputs>();
  const navigate = useNavigate();
  const [loginUser, { isSuccess, data }] = useLoginUserMutation();
  const dispatch = useAppDispatch();

  const updateToken = useCallback(() => {
    if (isSuccess) {
      data && dispatch(setToken(data.user.token));
      navigate('/');
    }
  }, [isSuccess, data, dispatch, navigate]);

  useEffect(() => {
    updateToken();
  }, [data, updateToken]);

  const handleLogin = (inputsData: Inputs) => {
    const { email, password } = getValues();
    if (!email) {
      setError('email', { message: 'Email is required' });
    }
    if (!password) {
      setError('password', { message: 'Password is required' });
    } else {
      loginUser(inputsData);
    }
  };

  const inputs = (
    <div className='flex flex-col justify-end w-full'>
      <FormInput type='email' control={control} name='email' label='Email' />
      <FormInput
        type='password'
        control={control}
        name='password'
        label='Password'
      />
    </div>
  );

  return (
    <div className='flex justify-center h-screen'>
      <div className='flex flex-col items-center gap-5 mt-10 w-full mx-10 lg:w-2/6 '>
        <div className='flex flex-col gap-2'>
          <h2 className='text-4xl text-center'>Sign In</h2>
          <Button onClick={() => navigate('/signup')}>Need an account?</Button>
        </div>
        <Form
          inputs={inputs}
          submitButtonLabel='Sign In'
          handleSubmit={handleSubmit(handleLogin)}
        />
      </div>
    </div>
  );
};

export default SignIn;
