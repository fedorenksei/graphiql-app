import { setUrl } from '@/app/model/store/slices/requestSlice';
import { useAppDispatch } from '@/shared/hooks/hooks';
import { Input } from '@nextui-org/react';
import { useForm } from 'react-hook-form';

type FormFields = {
  baseUrl: string;
};

export const BaseUrl = () => {
  const dispatch = useAppDispatch();
  const { register } = useForm<FormFields>({});

  return (
    <div>
      Endpoint
      <Input
        {...register('baseUrl', {
          onChange: (e) => dispatch(setUrl(e.target.value)),
        })}
      />
    </div>
  );
};
