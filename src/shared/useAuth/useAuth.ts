import { useAppSelector } from '../hooks';

export const useAuth = () => {
  const { email, id, name } = useAppSelector((store) => store.userReducer);
  const isAuth = !!name;

  return {
    isAuth,
    email,
    name,
    id,
  };
};
