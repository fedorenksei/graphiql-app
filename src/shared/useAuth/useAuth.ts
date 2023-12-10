import { loginUser, logoutUser } from '@/app/model/store/slices/userSlice';
import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { useAppDispatch, useAppSelector } from '../hooks';

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const { email, uid } = useAppSelector((store) => store.userReducer);
  const auth = getAuth();

  const login = (userEmail: string, userPassword: string) => {
    createUserWithEmailAndPassword(auth, userEmail, userPassword)
      .then(({ user }) => {
        dispatch(loginUser({ email: user.email, uid: user.uid }));
      })
      .catch(console.error);
  };

  const logout = () => {
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
