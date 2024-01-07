import { setUrl } from '@/app/model/store/slices/requestSlice';
import { useAppDispatch } from '@/shared/hooks/hooks';
import { LanguageContext } from '@/shared/languages/LanguageProvider';
import { Input } from '@nextui-org/react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';

type FormFields = {
  baseUrl: string;
};

export const BaseUrl = () => {
  const { words } = useContext(LanguageContext);
  const dispatch = useAppDispatch();
  const { register } = useForm<FormFields>({});

  return (
    <div>
      Endpoint
      <Input
        placeholder={words.baseUrlPlaceholder}
        {...register('baseUrl', {
          onChange: (e) => dispatch(setUrl(e.target.value)),
        })}
      />
    </div>
  );
};
