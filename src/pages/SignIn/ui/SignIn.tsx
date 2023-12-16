import { useAuth } from '@/shared/hooks/useAuth/useAuth';
import { SignInForm } from '@/widgets/SignInForm/ui/SignIn';
import { Navigate } from 'react-router-dom';

export const SignIn = () => {
  const { isAuth } = useAuth();
  return isAuth ? <Navigate to="/" /> : <SignInForm />;
};
