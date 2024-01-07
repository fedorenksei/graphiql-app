import { GraphQL } from '@/widgets/GraphQL';
import { Link, useSearchParams } from 'react-router-dom';
import { Button } from '@nextui-org/button';
import { useAuth } from '@/shared/hooks/useAuth/useAuth';
import { POPUP_NAMES } from '@/shared/constants/popupNames';
import { useEffect, useContext } from 'react';
import { Footer } from '@/widgets/Footer';
import { LanguageContext } from '../../shared/languages/LanguageProvider';
import { Header } from '../Header';

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
      <Header />
      <div className="flex flex-col mt-20">
        <h1>{words.mainPage}</h1>
        <Link to="/">
          <Button>{words.toWelcome}</Button>
        </Link>
      </div>
      <Link to="/docs">
        <Button>to Docs</Button>
      </Link>
      <GraphQL />
      <Footer />
    </>
  );
};
