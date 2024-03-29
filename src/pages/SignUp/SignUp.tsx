import { useForm } from 'react-hook-form';
import Form from '../../components/Form/Form';
import FormInput from '../../components/FormInput/FormInput';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useRegisterUserMutation } from '../../store';

type Inputs = {
  name: string;
  email: string;
  password: string;
};

const SignUp = () => {
  const { control, handleSubmit, setError, getValues } = useForm<Inputs>();
  const [registerUser, isSuccess] = useRegisterUserMutation();
  const navigate = useNavigate();

  const handleSignUp = (data: Inputs) => {
    if (!getValues().email) {
      setError('email', { message: 'Email is required' });
    }
    if (!getValues().name) {
      setError('name', { message: 'Name is required' });
    }
    if (!getValues().password) {
      setError('password', { message: 'Password is required' });
    } else {
      registerUser(data);
      isSuccess && navigate('/signin');
    }
  };

  const inputs = (
    <div className='flex flex-col justify-center'>
      <FormInput type='text' control={control} name='name' label='Name' />
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
          <h2 className='text-4xl  text-center'>Sign Up</h2>
          <Button
            onClick={() => {
              navigate('/signin');
            }}>
            Have an account?
          </Button>
        </div>
        <Form
          inputs={inputs}
          submitButtonLabel='Sign Up'
          handleSubmit={handleSubmit(handleSignUp)}
        />
      </div>
    </div>
  );
};
export default SignUp;
