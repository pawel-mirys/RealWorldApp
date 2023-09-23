/* eslint-disable @typescript-eslint/no-explicit-any */
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

type ControlledInputProps = {
  control: any;
  name: string;
  label: string;
  type: string;
  className?: string;
};

const FormInput: React.FC<ControlledInputProps> = ({
  control,
  name,
  label,
  type,
  className,
  ...props
}) => {
  return (
    <Controller
      control={control}
      rules={{
        required: `${name} is required`,
      }}
      name={name}
      render={({ field: { ref, ...field }, fieldState: { error } }) => (
        <TextField
          ref={ref}
          onChange={field.onChange}
          type={type}
          variant='outlined'
          id='outlined-basic'
          label={label}
          name={name}
          error={!!error}
          helperText={error?.message}
          className={className}
          {...props}
        />
      )}
    />
  );
};

export default FormInput;
