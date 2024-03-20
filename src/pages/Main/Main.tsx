import { POPUP_NAMES } from '@/shared/constants/popupNames';
import { useAuth } from '@/shared/hooks/useAuth/useAuth';
import { Footer } from '@/widgets/Footer';
import { GraphQL } from '@/widgets/GraphQL';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Header } from '../Header';

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
    <>
      <Header />
      <div className="p-12 mt-20">
        <GraphQL />
      </div>
      <Footer />
    </>
  );
};
