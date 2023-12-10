import { useAuth } from '@/shared/useAuth/useAuth';
import { Link, Navigate } from 'react-router-dom';

export const Main = () => {
  const { isAuth } = useAuth();
  return isAuth ? (
    <div>
      Main page
      <Link to="/">to Welcome</Link>
    </div>
  ) : (
    <Navigate to="/" />
  );
};
