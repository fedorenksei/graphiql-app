import { useForm } from 'react-hook-form';
import { useAuth } from '@/shared/hooks/useAuth/useAuth';
import { Button } from '@nextui-org/button';
import { RootPasswordInput } from '@/shared/ui/RootPasswordInput';
import { RootInput } from '@/shared/ui/RootInput';
import { emailValidation } from '@/shared/constants/validators/email';
import { passwordValidation } from '@/shared/constants/validators/password';
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
          formFieldProps={{
            register,
            validator: emailValidation,
            name: 'email',
            message: errors.email?.message,
          }}
          type="text"
          placeholder="email"
          inputMode="email"
        />
        <RootPasswordInput
          formFieldProps={{
            register,
            validator: passwordValidation,
            name: 'password',
            message: errors.password?.message,
          }}
          placeholder="password"
        />
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
