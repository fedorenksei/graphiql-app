import { setQuery } from '@/app/model/store/slices/requestSlice';
import { useAppDispatch } from '@/shared/hooks/hooks';
import { LanguageContext } from '@/shared/languages/LanguageProvider';
import { Textarea } from '@nextui-org/react';
import { ChangeEventHandler, useContext, useState } from 'react';
import { formatQuery } from './model/formatter';

export const Query = () => {
  const { words } = useContext(LanguageContext);
  const dispatch = useAppDispatch();
  const [value, setValue] = useState('');

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const formatted = formatQuery(e.target?.value || '');
    dispatch(setQuery(formatted));
    setValue(formatted);
  };

  return (
    <div>
      Query
      <Textarea
        placeholder={words.queryPlaceholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};
