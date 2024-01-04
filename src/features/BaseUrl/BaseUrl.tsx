import { setUrl } from '@/app/model/store/slices/urlSlice';
import { useAppDispatch } from '@/shared/hooks/hooks';
import { Input } from '@nextui-org/react';
import { SubmitHandler, useForm } from 'react-hook-form';

type FormFields = {
  baseUrl: string;
};

export const BaseUrl = () => {
  const dispatch = useAppDispatch();
  const { handleSubmit, register } = useForm<FormFields>({});

  const onSubmit: SubmitHandler<FormFields> = ({ baseUrl }) => {
    dispatch(setUrl({ baseUrl }));
  };

  return (
    <div>
      Endpoint
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input {...register('baseUrl')} />
      </form>
    </div>
  );
};
