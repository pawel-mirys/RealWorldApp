import React from 'react';
import { Avatar, Button } from '@mui/material';
import { useFetchProfileQuery } from '../../../store';
import AddIcon from '@mui/icons-material/Add';
import { User } from '../../../types';

type ProfileHeaderProps = {
  username: string;
  currentUser: User;
};

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  username,
  currentUser,
}) => {
  const { data, isLoading, error } = useFetchProfileQuery(username || '', {
    refetchOnMountOrArgChange: false,
  });

  const profileData = data?.profile;

  let content;

  if (isLoading) {
    content = <div>Loading profile...</div>;
  } else if (error) {
    content = <div>Error while loading a profile</div>;
  } else {
    content = (
      <header className='flex flex-col items-center w-screen py-10 bg-zinc-700'>
        <Avatar
          sx={{ width: '100px', height: '100px' }}
          alt={username}
          src={profileData?.image}
        />
        <div className='text-gray-300 text-2xl font-bold mt-5'>
          {profileData?.username}
        </div>
        {profileData?.bio && (
          <div className='profile-bio w-5/6 text-gray-100 text-lg mt-3 text-center'>
            {profileData?.bio}
          </div>
        )}
        {profileData?.username !== currentUser.username && (
          <Button sx={{ mt: '15px' }} variant='contained'>
            <AddIcon /> Follow {profileData?.username}
          </Button>
        )}
      </header>
    );
  }

  return content;
};

export default ProfileHeader;
