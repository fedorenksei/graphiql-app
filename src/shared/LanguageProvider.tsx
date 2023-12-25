import { ReactNode, createContext, useMemo, useState } from 'react';
import languages, { Languages } from './languages';

interface LanguageContextType {
  language: keyof Languages;
  setLanguage: (language: keyof Languages) => void;
  words: Record<string, string>;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  words: languages.en,
});

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [language, setLanguage] = useState<keyof Languages>('en');

  const value = useMemo(() => {
    return {
      language,
      setLanguage,
      words: languages[language],
    };
  }, [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
