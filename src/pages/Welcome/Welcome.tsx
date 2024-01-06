import { useContext } from 'react';
import { useAuth } from '@/shared/hooks/useAuth/useAuth';
import { Link } from 'react-router-dom';
import { Button } from '@nextui-org/button';
import { LanguageContext } from '../../shared/languages/LanguageProvider';

export const Welcome = () => {
  const { language, setLanguage, words } = useContext(LanguageContext);
  const { isAuth, email, logout } = useAuth();
  return (
    <div className="flex flex-col gap-4 h-screen items-center justify-center">
      {words.welcome}
      <Button onClick={() => setLanguage(language === 'en' ? 'ru' : 'en')}>
        {words.langButton}
      </Button>
      <Link
        className="text-blue-700"
        to="/main"
      >
        {words.main}
      </Link>

      {!isAuth && (
        <>
          <Link
            className="text-blue-700"
            to="/?popup=sign-up"
          >
            {words.signup}
          </Link>
          <Link
            className="text-blue-700"
            to="/?popup=sign-in"
          >
            {words.signin}
          </Link>
        </>
      )}
      {isAuth && (
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
      )}
    </div>
  );
};
