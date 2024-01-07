import { GraphQL } from '@/widgets/GraphQL';
import { Link, useSearchParams } from 'react-router-dom';
import { Button } from '@nextui-org/button';
import { useAuth } from '@/shared/hooks/useAuth/useAuth';
import { POPUP_NAMES } from '@/shared/constants/popupNames';
import { useEffect, useContext } from 'react';
import { Footer } from '@/widgets/Footer';
import { LanguageContext } from '../../shared/languages/LanguageProvider';

export const Main = () => {
  const { isAuth } = useAuth();
  const [searchParams, setSearchParams] = useSearchParams();
  const { words } = useContext(LanguageContext);
  useEffect(() => {
    if (!isAuth && !searchParams.get('popup')) {
      searchParams.set('popup', POPUP_NAMES.SIGN_IN);
      setSearchParams(searchParams, { replace: true });
    }
  });
  return (
    <>
      <div className="flex flex-col gap-4 h-screen items-center justify-center">
        {words.mainPage}
        <Link to="/">
          <Button>{words.toWelcome}</Button>
        </Link>
      <Link to="/docs">
        <Button>to Docs</Button>
      </Link>
      </div>
      <GraphQL />
      <Footer />
    </>
  );
};
