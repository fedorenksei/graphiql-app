import { setQuery } from '@/app/model/store/slices/querySlice';
import { useAppDispatch } from '@/shared/hooks/hooks';
import { Button, Textarea } from '@nextui-org/react';
import { SubmitHandler, useForm } from 'react-hook-form';

type FormFields = {
  query: string;
};

export const Query = () => {
  const dispatch = useAppDispatch();
  const { handleSubmit, register } = useForm<FormFields>({});

  const onSubmit: SubmitHandler<FormFields> = ({ query }) => {
    dispatch(setQuery(query));
  };

  return (
    <div>
      Query
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-5"
      >
        <Textarea {...register('query')} />
        <Button
          type="submit"
          className="justify-self-end"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};
