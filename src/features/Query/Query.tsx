import { setQuery } from '@/app/model/store/slices/urlSlice';
import { useAppDispatch } from '@/shared/hooks/hooks';
import { Textarea } from '@nextui-org/react';
import { useForm } from 'react-hook-form';

type FormFields = {
  query: string;
};

export const Query = () => {
  const dispatch = useAppDispatch();
  const { register } = useForm<FormFields>({});

  return (
    <div>
      Query
      <Textarea
        {...register('query', {
          onChange: (e) => dispatch(setQuery(e.target.value)),
        })}
      />
    </div>
  );
};
