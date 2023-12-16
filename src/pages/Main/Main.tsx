import { useAuth } from '@/shared/useAuth/useAuth';
import { Link, Navigate } from 'react-router-dom';
import { Button } from '@nextui-org/button';

export const Main = () => {
  const { isAuth } = useAuth();
  return isAuth ? (
    <div>
      Main page
      <Link to="/">
        <Button>to Welcome</Button>
      </Link>
      <Button>TEST</Button>
    </div>
  ) : (
    <Navigate to="/" />
  );
};
