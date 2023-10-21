/* eslint-disable @typescript-eslint/no-unused-vars */
import clsx from 'clsx';
import Form from '../../components/Form/Form';
import FormInput from '../../components/FormInput/FormInput';
import { useForm } from 'react-hook-form';
import { useAppSelector } from '../../store';
import { UpdateUserData } from '../../types';
import { useEffect, useState } from 'react';
import SettingsOverview from './modules/SettingsOverview';
import { Button } from '@mui/material';
import AlertDialog from '../../components/AlertDialog/AlertDialog';

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

  const { control, handleSubmit, setValue, formState, reset } =
    useForm<SettingsInputs>({});

  useEffect(() => {
    setUserData({
      ...currentUserData,
      bio: currentUserData.bio || null,
      password: null ?? '',
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

  const handleSubmitSettings = (inputsData: SettingsInputs) => {
    console.log(inputsData);
  };

  const settingsInputs = fieldsConfig.map((field) => (
    <div key={field.name}>
      <FormInput
        type={field.type}
        control={control}
        name={field.name}
        label={field.label}
        defaultValue={userData[field.name]}
      />
    </div>
  ));

  return (
    <div
      className={clsx(
        'settings-page',
        'flex flex-col items-center w-full h-screen'
      )}>
      <h1 className='text-4xl text-center mt-5'>User Settings</h1>

      <div className='w-2/6'>
        {isEditable && (
          <>
            <Form
              handleSubmit={handleSubmit(handleSubmitSettings)}
              inputs={settingsInputs}
            />
            <Button
              onClick={handleEditSettings}
              variant='contained'
              color='warning'>
              Cancel
            </Button>
          </>
        )}
        {!isEditable && (
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
