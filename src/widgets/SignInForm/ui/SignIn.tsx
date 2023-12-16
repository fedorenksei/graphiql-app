import { useForm } from 'react-hook-form';
import { useAuth } from '@/shared/hooks/useAuth/useAuth';
import { Button } from '@nextui-org/button';
import { RootPasswordInput } from '@/shared/ui/RootPasswordInput';
import { RootInput } from '@/shared/ui/RootInput';
import { SignInFormType } from '../model/types';

const containerClasses =
  'min-h-screen flex justify-center items-center bg-white';
const formClasses = 'max-w-xs flex flex-col gap-4';

export const SignInForm = () => {
  const { login } = useAuth();
  const defaultValues: SignInFormType = {
    email: '',
    password: '',
  };
  const form = useForm<SignInFormType>({
    defaultValues,
    mode: 'all',
  });

  const { register, handleSubmit, formState } = form;
  const { errors, isDirty, isValid } = formState;
  const isFormValid = !(!isDirty || !isValid);

  const onSubmit = (data: SignInFormType) => {
    login(data.email, data.password);
  };

  return (
    <div className={containerClasses}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={formClasses}
      >
        <RootInput
          register={register}
          type="text"
          placeholder="email"
          inputMode="email"
        />
        {errors.email && <span>{errors.email.message}</span>}
        <RootPasswordInput
          register={register}
          placeholder="password"
        />
        {errors.password && <span>{errors.password.message}</span>}
        <Button
          isDisabled={!isFormValid}
          type="submit"
        >
          Sign in
        </Button>
      </form>
    </div>
  );
};
