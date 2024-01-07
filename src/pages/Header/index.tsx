import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@nextui-org/react';
import { BsHouse } from 'react-icons/bs';
import { useAuth } from '@/shared/hooks/useAuth/useAuth';
import { LanguageContext } from '../../shared/languages/LanguageProvider';

export const Header = () => {
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
      className={`fixed z-30 top-0 w-full flex px-2 shadow-md ${
        isScrolled
          ? ' py-2  bg-slate-900/75 -translate-y-1 '
          : ' py-4  bg-slate-900 '
      }`}
    >
      <div className="max-w-7xl w-full flex  items-center">
        {!isScrolled && (
          <div className=" text-blue-500 hover:text-blue-900 transition text-2xl font-bold min-w-[8rem]">
            GraphiQL
          </div>
        )}
        <Link to="/">
          <Button
            isIconOnly
            className="mx-1"
          >
            <BsHouse />
          </Button>
        </Link>
        <Button
          color="primary"
          isIconOnly
          onClick={() => setLanguage(language === 'en' ? 'ru' : 'en')}
        >
          {words.langButton}
        </Button>
      </div>

      {isAuth && (
        <Button
          className="bg-orange-600"
          type="button"
          onClick={logout}
        >
          {words.Logout}
        </Button>
      )}
    </header>
  );
};
