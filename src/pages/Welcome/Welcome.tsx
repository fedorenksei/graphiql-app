import { useAuth } from '@/shared/hooks/useAuth/useAuth';
import { Button } from '@nextui-org/react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../../shared/languages/LanguageProvider';
import { AboutUs } from '../AboutUs';

export const Welcome = () => {
  const navigate = useNavigate();
  const { words } = useContext(LanguageContext);
  const { isAuth, email } = useAuth();
  return (
    <>
      <div className="flex flex-col gap-4 pt-20 px-20 items-end justify-center bg-slate-800 text-white ">
        {!isAuth && (
          <div className="flex gap-2 text-blue-700">
            <Button onClick={() => navigate('/?popup=sign-up')}>
              {words.signup}
            </Button>
            <Button onClick={() => navigate('/?popup=sign-in')}>
              {words.signin}
            </Button>
          </div>
        )}
        {isAuth && (
          <>
            <h3>
              {words.YouLoggedAs} {email}
            </h3>
            <Button
              onClick={() => navigate('/main')}
              color="success"
            >
              {words.main}
            </Button>
          </>
        )}
      </div>
      <div className="bg-slate-800">
        <AboutUs />
      </div>
    </>
  );
};
