import { useParams } from 'react-router-dom';
import ProfileHeader from './modules/ProfileHeader';
import ProfileArticlesList from './modules/ProfileArticles';
import { useAppSelector } from '../../store';

const Profile = () => {
  const { username } = useParams<{ username: string }>();
  const currentUserData = useAppSelector((state) => state.currentUserState);
  return (
    username && (
      <div className='min-h-screen'>
        <ProfileHeader username={username} currentUser={currentUserData} />
        <ProfileArticlesList
          username={username}
          currentUser={currentUserData}
        />
      </div>
    )
  );
};
export default Profile;
