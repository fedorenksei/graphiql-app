import { useContext } from 'react';
import { useAppSelector } from '@/shared/hooks/hooks';
import { LanguageContext } from '../../shared/languages/LanguageProvider';

export const Response = () => {
  const { words } = useContext(LanguageContext);
  const response = useAppSelector((state) => state.responseSlice.response);
  const error = useAppSelector((state) => state.responseSlice.error);
  let result = response || error;
  if (result) result = JSON.stringify(JSON.parse(result), null, '  ');

  return (
    <div>
      {words.response}
      <pre>{result}</pre>
    </div>
  );
};
