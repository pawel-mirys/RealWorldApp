import { Avatar, Button } from '@mui/material';
import { UpdateUserData } from '../../../types';

type SettingsOverviewProps = {
  userData: UpdateUserData;
  onClick?: () => void;
};

const SettingsOverview: React.FC<SettingsOverviewProps> = ({
  userData,
  onClick,
}) => {
  return (
    <div className='settings-overview'>
      <div>
        <h2 className='text-xl'>
          Avatar:
          <Avatar sx={{ width: '50px', height: '50px' }} src={userData.image} />
        </h2>
      </div>
      <div>Email: {userData.email}</div>
      <div>{userData.username}</div>
      <div>
        Bio:
        {userData.bio === null
          ? ' You have no bio on your profile. Edit profile to add a bio'
          : userData.bio}
      </div>
      <Button variant='contained' onClick={onClick}>
        Edit
      </Button>
    </div>
  );
};

export default SettingsOverview;
