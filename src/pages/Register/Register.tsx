import { useForm } from 'react-hook-form';
import Form from '../../components/Form/Form';
import FormInput from '../../components/FormInput/FormInput';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

type Inputs = {
  name: string;
  email: string;
  password: string;
};

const Register = () => {
  const { control, handleSubmit } = useForm<Inputs>();
  const navigate = useNavigate();
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

  const handleRegister = () => {
    handleSubmit;
  };

  return (
    <div className='flex justify-center'>
      <div className='flex  flex-col items-center gap-5 mt-10'>
        <div className='flex flex-col gap-2'>
          <h2 className='text-4xl  text-center'>LogIn</h2>
          <Button
            onClick={() => {
              navigate('/login');
            }}>
            Have an account?
          </Button>
        </div>
        <Form
          inputs={inputs}
          submitButtonLabel='Register'
          handleSubmit={handleRegister}
        />
      </div>
    </div>
  );
};
export default Register;
