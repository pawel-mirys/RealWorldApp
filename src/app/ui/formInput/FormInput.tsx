import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import styles from './FormInput.module.scss';

type ControlledInputProps = {
  control: any;
  name: string;
  label: string;
  type: string;
};

export const FormInput = ({ control, name, label, type }: ControlledInputProps) => {
  return (
    <Controller
      control={control}
      rules={{
        required: `${name} is required`,
      }}
      name={name}
      render={({ field: { ref, ...field }, fieldState: { error } }) => (
        <TextField
          onChange={field.onChange}
          type={type}
          variant="outlined"
          id="outlined-basic"
          label={label}
          name={name}
          error={!!error}
          helperText={error?.message}
          className={styles.textField}
        />
      )}
    />
  );
};
