import { useAuth } from '@/shared/hooks/useAuth/useAuth';
import { Button } from '@nextui-org/react';
import { useContext, useEffect, useState } from 'react';
import { BsHouse } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../../shared/languages/LanguageProvider';

export const Header = () => {
  const navigate = useNavigate();
  const { language, setLanguage, words } = useContext(LanguageContext);
  const { isAuth, logout } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed z-30 top-0 w-full flex px-2 shadow-md transition ${
        isScrolled
          ? ' py-2  bg-slate-900/75 -translate-y-1 '
          : ' py-4  bg-slate-900 '
      }`}
    >
      <div className="max-w-7xl w-full flex items-center gap-2">
        {!isScrolled && (
          <div className=" text-blue-500 hover:text-blue-900 transition text-2xl font-bold min-w-[8rem]">
            GraphiQL
          </div>
        )}
        <Button
          onClick={() => navigate('/')}
          isIconOnly
        >
          <BsHouse />
        </Button>
        <Button
          color="primary"
          isIconOnly
          onClick={() => setLanguage(language === 'en' ? 'ru' : 'en')}
        >
          {words.langButton}
        </Button>
      </div>

      {isAuth && (
        <div className="flex gap-2">
          <Button
            className="bg-orange-600"
            type="button"
            onClick={logout}
          >
            {words.Logout}
          </Button>
        </div>
      )}
    </header>
  );
};
