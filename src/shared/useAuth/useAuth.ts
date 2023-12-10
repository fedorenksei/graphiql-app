import { loginUser, logoutUser } from '@/app/model/store/slices/userSlice';
import { getAuth, signOut } from 'firebase/auth';
import { useAppDispatch, useAppSelector } from '../hooks';

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const { email, uid } = useAppSelector((store) => store.userReducer);

  const login = (userEmail: string, userUid: string) =>
    dispatch(loginUser({ email: userEmail, uid: userUid }));

  const logout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        dispatch(logoutUser());
      })
      .catch(console.error);
  };

  const isAuth = !!uid;

  return {
    isAuth,
    email,
    uid,
    login,
    logout,
  };
};
