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
          {...props}
          ref={ref}
          onChange={field.onChange}
          variant='outlined'
          id='outlined-basic'
          aria-autocomplete='list'
          label={label}
          name={name}
          error={!!error}
          helperText={error?.message}
          className={className}
        />
      )}
    />
  );
};

export default FormInput;
