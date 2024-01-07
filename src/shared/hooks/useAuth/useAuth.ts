import { openPopup } from '@/app/model/store/slices/popupSlice';
import { loginUser, logoutUser } from '@/app/model/store/slices/userSlice';
import { ERROR_NAMES } from '@/shared/constants/errors';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
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
      .catch(() => {
        dispatch(openPopup({ name: ERROR_NAMES.LOG_OUT }));
      });
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
