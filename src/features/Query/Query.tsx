import { setQuery } from '@/app/model/store/slices/requestSlice';
import { useAppDispatch } from '@/shared/hooks/hooks';
import { Textarea } from '@nextui-org/react';
import { ChangeEventHandler, useState } from 'react';
import { formatQuery } from './model/formatter';

export const Query = () => {
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
        onChange={onChange}
        value={value}
      />
    </div>
  );
};
