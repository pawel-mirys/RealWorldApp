import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import {
  resetToken,
  resetUserData,
  useAppDispatch,
  useAppSelector,
  useUpdateCurrentUserSettingsMutation,
} from '../../store';
import { UpdateUserData } from '../../types';
import SettingsOverview from './modules/SettingsOverview';
import AlertDialog from '../../components/AlertDialog/AlertDialog';
import Form from '../../components/Form/Form';
import FormInput from '../../components/FormInput/FormInput';

type SettingsInputs = {
  image: string;
  username: string;
  bio: string | null;
  email: string;
  password: string | null;
};

type FieldConfig = {
  name: keyof UpdateUserData;
  label: string;
  type: 'text' | 'email' | 'password' | 'multiline';
  defaultValue?: string | null;
};

const fieldsConfig: FieldConfig[] = [
  {
    name: 'image',
    label: 'Image URL',
    type: 'text',
  },
  {
    name: 'username',
    label: 'Name',
    type: 'text',
  },
  {
    name: 'bio',
    label: 'Bio',
    type: 'multiline',
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
  },
];

const Settings = () => {
  const [updateUser] = useUpdateCurrentUserSettingsMutation();
  const currentUserData = useAppSelector((state) => state.currentUserState);
  const [isEditable, setIsEditable] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [userData, setUserData] = useState<UpdateUserData>({
    email: '',
    image: '',
    password: null,
    username: '',
    bio: '',
  });

  const dispatch = useAppDispatch();
  const { control, handleSubmit, setValue, formState, reset, setError } =
    useForm<SettingsInputs>();

  useEffect(() => {
    setUserData({
      ...currentUserData,
      bio: currentUserData.bio || null,
      password: null,
    });
  }, [currentUserData]);

  useEffect(() => {
    fieldsConfig.forEach((field) => {
      setValue(field.name, userData[field.name]);
    });
  }, [userData, setValue]);

  const handleEditSettings = () => {
    if (formState.isDirty) {
      setOpenDialog((prev) => !prev);
    } else {
      setIsEditable((prev) => !prev);
    }
  };

  const handleLogOut = () => {
    dispatch(resetToken());
    dispatch(resetUserData());
  };

  const handleUpdateData = (inputsData: SettingsInputs) => {
    updateUser({ token: currentUserData.token, user: inputsData })
      .unwrap()
      .then(() => {
        handleLogOut();
      })
      .catch((error) => {
        setError('root', { type: 'custom', message: error });
      });
  };

  const handleSubmitSettings = (inputsData: SettingsInputs) => {
    formState.isDirty
      ? handleUpdateData(inputsData)
      : setError('root', {
          type: 'custom',
          message: 'At least one field is required.',
        });
  };

  const settingsInputs = fieldsConfig.map((field) => (
    <div key={field.name}>
      <FormInput
        type={field.type}
        control={control}
        name={field.name}
        label={field.label}
        defaultValue={userData[field.name]}
        multiline
        minRows={field.name === 'bio' ? 5 : 1}
      />
    </div>
  ));

  return (
    <div
      className={clsx(
        'settings-page',
        'flex flex-col items-center lg:w-full h-screen m-4'
      )}>
      <h1 className='text-4xl text-center my-5'>User Settings</h1>
      <p className='text-red-600 my-5'>
        Warning: After confirming the changes, you will be logged out.
      </p>
      <div className='flex flex-col gap-4 w-full lg:w-3/6 mx-4 '>
        {isEditable ? (
          <>
            <Form
              handleSubmit={handleSubmit(handleSubmitSettings)}
              inputs={settingsInputs}
            />
            {formState.errors && (
              <span className='text-red-600'>
                {formState.errors.root?.message}
              </span>
            )}
            <Button
              onClick={handleEditSettings}
              variant='contained'
              color='warning'
              className='w-full'>
              Cancel
            </Button>
          </>
        ) : (
          <SettingsOverview userData={userData} onClick={handleEditSettings} />
        )}
      </div>
      <AlertDialog
        isOpen={openDialog}
        dialogTitle='Unsaved changes!'
        dialogText='You have unsaved changes on this page. Do you want to leave this page and discard your changes or stay on this page?'
        agreeButtonText='Leave'
        disagreeButtonText='Stay'
        onAgree={() => {
          setIsEditable(false);
          setOpenDialog(false);
          reset();
        }}
        onDisagree={() => {
          setOpenDialog(false);
        }}
      />
    </div>
  );
};

export default Settings;
