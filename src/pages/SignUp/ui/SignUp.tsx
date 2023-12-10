import { useAuth } from '@/shared/useAuth/useAuth';
import { SignUpForm } from '@/widgets/SignUpForm';
import { Navigate } from 'react-router-dom';

export const SignUp = () => {
  const { isAuth } = useAuth();
  return isAuth ? <Navigate to="/" /> : <SignUpForm />;
};
