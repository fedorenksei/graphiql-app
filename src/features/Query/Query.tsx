import { setQuery } from '@/app/model/store/slices/requestSlice';
import { useAppDispatch } from '@/shared/hooks/hooks';
import { LanguageContext } from '@/shared/languages/LanguageProvider';
import { Button, Textarea } from '@nextui-org/react';
import { ChangeEventHandler, useContext, useState } from 'react';
import { formatQuery } from './model/formatter';

export const Query = () => {
  const { words } = useContext(LanguageContext);
  const dispatch = useAppDispatch();
  const [value, setValue] = useState('');

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const query = e.target?.value || '';
    dispatch(setQuery(query));
    setValue(query);
  };

  const onFormat = () => {
    const formatted = formatQuery(value);
    dispatch(setQuery(formatted));
    setValue(formatted);
  };

  return (
    <div className="space-y-1">
      <div className="flex justify-between items-center">
        <p>Query</p>
        <Button onClick={onFormat}>{words.formatButton}</Button>
      </div>
      <Textarea
        placeholder={words.queryPlaceholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};
