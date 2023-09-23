import { useParams } from 'react-router-dom';
import { useFetchUserQuery } from '../../store';

const Profile = () => {
  const { username } = useParams<{ username: string }>();
  const { data, isLoading, error } = useFetchUserQuery(username || '');


  const profileData = data?.profile;

  let content;

  if (isLoading) {
    content = <div>Loading profile...</div>;
  } else if (error) {
    content = <div>Error while loading a profile</div>;
  } else {
    content = (
      <div>
        <img src={profileData?.image} alt='' />
        <div>{profileData?.username}</div>
        <div>{profileData?.bio}</div>
      </div>
    );
  }

  return <div>{content}</div>;
};
export default Profile;
