import Form from '../../components/Form/Form';
import FormInput from '../../components/FormInput/FormInput';
import { useForm } from 'react-hook-form';

type Inputs = {
  email: string;
  password: string;
};

const Login = () => {
  const { control, handleSubmit } = useForm<Inputs>();
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
      <Form inputs={inputs} handleSubmit={handleLogin} />
    </div>
  );
};

export default Login;
