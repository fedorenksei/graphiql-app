import { loginUser, logoutUser } from '@/app/model/store/slices/userSlice';
import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { useAppDispatch, useAppSelector } from '../hooks';

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const { email, uid } = useAppSelector((store) => store.userReducer);
  const auth = getAuth();

  const login = async (userEmail: string, userPassword: string) => {
    return signInWithEmailAndPassword(auth, userEmail, userPassword)
      .then(({ user }) => {
        dispatch(loginUser({ email: user.email, uid: user.uid }));
        return true;
      })
      .catch(() => false);
  };

  const signUp = (userEmail: string, userPassword: string) => {
    return createUserWithEmailAndPassword(auth, userEmail, userPassword)
      .then(({ user }) => {
        dispatch(loginUser({ email: user.email, uid: user.uid }));
        return true;
      })
      .catch((e) => {
        return e.code.slice(e.code.indexOf('/') + 1).replaceAll('-', ' ');
      });
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
    signUp,
  };
};
