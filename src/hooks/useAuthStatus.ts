import { useAppSelector } from '../store';

export const useAuthStatus = () => {
  const token = useAppSelector((state) => state.tokenState.token);
  const isLoggedIn = !!token;
  return isLoggedIn;
};

export default useAuthStatus;
