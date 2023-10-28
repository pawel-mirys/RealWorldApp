import React from 'react';
import { Avatar, Button } from '@mui/material';
import {
  useFetchProfileQuery,
  useFollowProfileMutation,
  useUnfollowProfileMutation,
} from '../../../store';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { User } from '../../../types';
import useAuthStatus from '../../../hooks/useAuthStatus';
import { useNavigate } from 'react-router-dom';

type ProfileHeaderProps = {
  username: string;
  currentUser: User;
};

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  username,
  currentUser,
}) => {
  const { data, isLoading, error } = useFetchProfileQuery({
    userName: username,
    token: currentUser.token,
  });
  const navigate = useNavigate();
  const [followProfile] = useFollowProfileMutation();
  const [unfollowProfile] = useUnfollowProfileMutation();
  const isLoggedIn = useAuthStatus();
  const profileData = data?.profile;

  let content;

  if (isLoading) {
    content = <div>Loading profile...</div>;
  } else if (error) {
    content = <div>Error while loading a profile</div>;
  } else {
    if (profileData) {
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
          {profileData?.username !== currentUser.username &&
            (!profileData?.following ? (
              <Button
                sx={{ mt: '15px' }}
                variant='outlined'
                onClick={() => {
                  !isLoggedIn
                    ? navigate('/signin')
                    : followProfile({
                        userName: profileData.username,
                        token: currentUser.token,
                      });
                }}>
                <AddIcon /> Follow {profileData?.username}
              </Button>
            ) : (
              <Button
                sx={{ mt: '15px' }}
                variant='contained'
                onClick={() => {
                  unfollowProfile({
                    userName: profileData.username,
                    token: currentUser.token,
                  });
                }}>
                <RemoveIcon /> Unfollow {profileData?.username}
              </Button>
            ))}
        </header>
      );
    }
  }

  return content;
};

export default ProfileHeader;
