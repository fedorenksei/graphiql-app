import { Link, useSearchParams } from 'react-router-dom';
import { Button } from '@nextui-org/button';
import { useAuth } from '@/shared/hooks/useAuth/useAuth';
import { POPUP_NAMES } from '@/shared/constants/popupNames';
import { useEffect } from 'react';

export const Main = () => {
  const { isAuth } = useAuth();
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    if (!isAuth && !searchParams.get('popup')) {
      searchParams.set('popup', POPUP_NAMES.SIGN_IN);
      setSearchParams(searchParams, { replace: true });
    }
  });
  return (
    <div>
      Main page
      <Link to="/">
        <Button>to Welcome</Button>
      </Link>
      <Button>TEST</Button>
    </div>
  );
};
