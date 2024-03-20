import { useAuth } from '@/shared/hooks/useAuth/useAuth';
import { Button } from '@nextui-org/react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../../shared/languages/LanguageProvider';
import { AboutUs } from '../AboutUs';

export const Welcome = () => {
  const { words } = useContext(LanguageContext);
  const { isAuth, email } = useAuth();
  return (
    <>
      <div className="flex flex-col gap-4 pt-20 px-20 items-end justify-center bg-slate-800 text-white ">
        {!isAuth && (
          <div className="flex gap-2">
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
          </div>
        )}
        {isAuth && (
          <>
            <h3>
              {words.YouLoggedAs} {email}
            </h3>
            <Link to="/main">
              <Button color="success">{words.main}</Button>
            </Link>
          </>
        )}
      </div>
      <div className="bg-slate-800">
        <AboutUs />
      </div>
    </>
  );
};
