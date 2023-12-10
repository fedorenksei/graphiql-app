import { useAppSelector } from '../hooks';

export const useAuth = () => {
  const { email, uid } = useAppSelector((store) => store.userReducer);
  const isAuth = !!uid;

  return {
    isAuth,
    email,
    uid,
  };
};
