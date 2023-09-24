import { Button } from '@mui/material';
import Form from '../../components/Form/Form';
import FormInput from '../../components/FormInput/FormInput';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

type Inputs = {
  email: string;
  password: string;
};

const Login = () => {
  const { control, handleSubmit } = useForm<Inputs>();
  const navigate = useNavigate();
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

  const handleLogin = () => {
    handleSubmit;
  };

  return (
    <div className='flex justify-center'>
      <div className='flex  flex-col items-center gap-5 mt-10'>
        <div className='flex flex-col gap-2'>
          <h2 className='text-4xl  text-center'>LogIn</h2>
          <Button
            onClick={() => {
              navigate('/register');
            }}>
            Need an account?
          </Button>
        </div>
        <Form
          inputs={inputs}
          submitButtonLabel='Login'
          handleSubmit={handleLogin}
        />
      </div>
    </div>
  );
};

export default Login;
