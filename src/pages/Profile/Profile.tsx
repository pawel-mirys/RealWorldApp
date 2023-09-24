import { useParams } from 'react-router-dom';
import ProfileHeader from './modules/ProfileHeader';
import ProfileArticlesList from './modules/ProfileArticles';

const Profile = () => {
  const { username } = useParams<{ username: string }>();

  return (
    username && (
      <div>
        <ProfileHeader username={username} />
        <ProfileArticlesList username={username} />
      </div>
    )
  );
};
export default Profile;
