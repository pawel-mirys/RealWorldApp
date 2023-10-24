/* eslint-disable @typescript-eslint/no-explicit-any */
import { TextField, TextFieldProps } from '@mui/material';
import {
  Controller,
  FieldPath,
  FieldPathValue,
  FieldValues,
} from 'react-hook-form';

type ControlledInputProps = {
  control: any;
  name: string;
  label: string;
  type: string;
  className?: string;
  validate?: (
    value: FieldPathValue<FieldValues, FieldPath<FieldValues>>
  ) => string | undefined;
} & TextFieldProps;

const FormInput: React.FC<ControlledInputProps> = ({
  control,
  name,
  label,
  className,
  validate,
  ...props
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={{ validate }}
      render={({ field: { ref, ...field }, fieldState: { error } }) => (
        <TextField
          {...props}
          onChange={field.onChange}
          ref={ref}
          variant='outlined'
          id='outlined-basic'
          aria-autocomplete='list'
          sx={{
            '& .MuiInputBase-root': {
              width: '100%',
            },
          }}
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
