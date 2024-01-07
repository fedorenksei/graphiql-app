import { setVariables } from '@/app/model/store/slices/requestSlice';
import { useAppDispatch } from '@/shared/hooks/hooks';
import { LanguageContext } from '@/shared/languages/LanguageProvider';
import { Textarea } from '@nextui-org/react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';

type FormFields = {
  variables: string;
};

export const Variables = () => {
  const { words } = useContext(LanguageContext);
  const dispatch = useAppDispatch();
  const {
    register,
    formState: { errors },
  } = useForm<FormFields>({ mode: 'onChange' });

  return (
    <div>
      {words.variables}
      <Textarea
        placeholder={words.variablesPlaceholder}
        {...register('variables', {
          onChange: (e) => dispatch(setVariables(e.target.value)),
          validate: (value) => {
            if (!value) return true;
            try {
              const parsed = JSON.parse(value);
              if (!parsed || typeof parsed !== 'object') return false;
              return true;
            } catch {
              return false;
            }
          },
        })}
      />
      {errors.variables && <p>Please, enter a valid JSON object</p>}
    </div>
  );
};
