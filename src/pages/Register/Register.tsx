import { useForm } from 'react-hook-form';
import Form from '../../components/Form/Form';
import FormInput from '../../components/FormInput/FormInput';

type Inputs = {
  name: string;
  email: string;
  password: string;
};

const Register = () => {
  const { control, handleSubmit } = useForm<Inputs>();

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
      <Form inputs={inputs} handleSubmit={handleRegister} />
    </div>
  );
};
export default Register;
