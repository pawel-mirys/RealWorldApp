import { useAppSelector } from '../store';

export const useAuthToken = () => {
  const token = useAppSelector((state) => state.tokenState.token);
  return token ? `Bearer ${token}` : '';
};
