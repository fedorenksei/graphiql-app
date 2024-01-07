import { useContext } from 'react';
import { useAuth } from '@/shared/hooks/useAuth/useAuth';
import { Link } from 'react-router-dom';
import { Button } from '@nextui-org/react';
import { Footer } from '@/widgets/Footer';
import { AboutUs } from '../AboutUs';
import { LanguageContext } from '../../shared/languages/LanguageProvider';
import { Header } from '../Header';

export const Welcome = () => {
  const { words } = useContext(LanguageContext);
  const { isAuth, email, logout } = useAuth();
  return (
    <>
      <Header />
      <div className="flex flex-col gap-4 mt-8 px-20 items-end justify-center bg-slate-800 text-white ">
        {words.welcome}

        {!isAuth && (
          <>
            <Link
              className="text-blue-700"
              to="/?popup=sign-up"
            >
              <Button>{words.signup}</Button>
            </Link>
            <Link
              className="text-blue-700"
              to="/?popup=sign-in"
            >
              <Button>{words.signin}</Button>
            </Link>
          </>
        )}
        {isAuth && (
          <>
            <Link
              className="text-blue-700"
              to="/main"
            >
              <Button color="success">{words.main}</Button>
            </Link>
            <div className="flex flex-col border-2 border-green-700">
              <h3>
                {words.YouLoggedAs} {email}
              </h3>
              <button
                className="bg-orange-600 rounded-md"
                type="button"
                onClick={logout}
              >
                {words.Logout}
              </button>
            </div>
          </>
        )}
      </div>
      <div className="bg-slate-800">
        <AboutUs />
      </div>
      <Footer />
    </>
  );
};
