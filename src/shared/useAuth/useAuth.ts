import { loginUser, logoutUser } from '@/app/model/store/slices/userSlice';
import { useAppDispatch, useAppSelector } from '../hooks';

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const { email, uid } = useAppSelector((store) => store.userReducer);

  const login = (userEmail: string, userUid: string) =>
    dispatch(loginUser({ email: userEmail, uid: userUid }));

  const logout = () => dispatch(logoutUser());

  const isAuth = !!uid;

  return {
    isAuth,
    email,
    uid,
    login,
    logout,
  };
};
