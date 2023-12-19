import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@nextui-org/button';
import { LanguageContext } from '../../shared/LanguageProvider';

export const Welcome = () => {
  const { language, setLanguage, words } = useContext(LanguageContext);

  return (
    <div>
      {words.welcome}
      <Button onClick={() => setLanguage(language === 'en' ? 'ru' : 'en')}>
        {language === 'en' ? 'Русский' : 'English'}
      </Button>
      <Link to="/main">
        <Button>{words.main}</Button>
      </Link>
      <Button>{words.about}</Button>
    </div>
  );
};
