import { setVariables } from '@/app/model/store/slices/requestSlice';
import { useAppDispatch } from '@/shared/hooks/hooks';
import { LanguageContext } from '@/shared/languages/LanguageProvider';
import { Collapsible } from '@/shared/ui/Collapsible';
import { Textarea } from '@nextui-org/react';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';

type FormFields = {
  variables: string;
};

export const Variables = () => {
  const { words } = useContext(LanguageContext);
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const {
    register,
    formState: { errors },
  } = useForm<FormFields>({ mode: 'onChange' });

  return (
    <div>
      <div
        onClick={() => setIsOpen((v) => !v)}
        role="presentation"
        className="cursor-pointer hover:text-blue-700"
      >
        Variables
      </div>
      <Collapsible isOpen={isOpen}>
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
      </Collapsible>
    </div>
  );
};
