import React from 'react';
import { Avatar, Button } from '@mui/material';
import { UpdateUserData } from '../../../types';
import clsx from 'clsx';

type SettingsOverviewProps = {
  userData: UpdateUserData;
  onClick?: () => void;
};

type SettingsFieldProps = {
  label: string;
  value: string | JSX.Element;
  className?: string;
};

const SettingsField: React.FC<SettingsFieldProps> = ({
  label,
  value,
  className,
}) => (
  <div className={clsx(className, 'flex flex-row gap-3 items-center')}>
    <h2 className='text-xl font-bold'>{label}</h2>
    {value}
  </div>
);

const SettingsOverview: React.FC<SettingsOverviewProps> = ({
  userData,
  onClick,
}) => (
  <div className='settings-overview flex flex-col w-full gap-5'>
    <SettingsField
      className='mt-3'
      label='Avatar'
      value={
        <Avatar sx={{ width: '40px', height: '40px' }} src={userData.image} />
      }
    />
    <SettingsField label='Email' value={userData.email} />
    <SettingsField label='Name' value={userData.username} />
    <SettingsField
      label='Bio'
      value={
        userData.bio === null
          ? 'You have no bio on your profile. Edit profile to add a bio'
          : userData.bio
      }
    />
    <Button variant='contained' onClick={onClick}>
      Edit
    </Button>
  </div>
);

export default SettingsOverview;
