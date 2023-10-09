import { Button } from '@mui/material';
import Form from '../../components/Form/Form';
import FormInput from '../../components/FormInput/FormInput';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {
  useAppDispatch,
  useLoginUserMutation,
} from '../../store';

import { setToken } from '../../store';
import { useCallback, useEffect } from 'react';

type Inputs = {
  email: string;
  password: string;
};

const SignIn = () => {
  const { control, handleSubmit } = useForm<Inputs>();
  const navigate = useNavigate();
  const [loginUser, { isSuccess, data }] = useLoginUserMutation();

  const dispatch = useAppDispatch();

  const inputs = (
    <div className='flex flex-col justify-end'>
      <FormInput
        type='email'
        control={control}
        name='email'
        label='Email'
        className=''
      />
      <FormInput
        type='password'
        control={control}
        name='password'
        label='Password'
      />
    </div>
  );

  const updateToken = useCallback(() => {
    if (isSuccess) {
      data && dispatch(setToken(data?.user.token));
      navigate('/');
    }
  }, [isSuccess, data, dispatch, navigate]);

  const handleLogin = (inputsData: Inputs) => {
    loginUser(inputsData);
  };

  useEffect(() => {
    updateToken();
  }, [data, updateToken]);

  return (
    <div className='flex justify-center h-screen'>
      <div className='flex  flex-col items-center gap-5 mt-10'>
        <div className='flex flex-col gap-2'>
          <h2 className='text-4xl  text-center'>Sign In</h2>
          <Button
            onClick={() => {
              navigate('/signup');
            }}>
            Need an account?
          </Button>
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
