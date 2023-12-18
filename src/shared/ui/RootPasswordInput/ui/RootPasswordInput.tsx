import { Input, InputProps } from '@nextui-org/react';
import React from 'react';
import { FormFieldProps } from '@/shared/types/forms';
import { useFormContext } from 'react-hook-form';
import { EyeSlashFilledIcon } from './EyeSlashFilledIcon';
import { EyeFilledIcon } from './EyeFilledIcon';

interface ExtendedProps extends InputProps {
  formFieldProps: FormFieldProps | null;
}

export const RootPasswordInput = (props: ExtendedProps) => {
  const [isVisible, setIsVisible] = React.useState(false);
  let registered = {};
  const { formFieldProps } = props;
  const { register } = useFormContext();
  if (formFieldProps) {
    const { validator, name } = formFieldProps;
    registered = register(name, validator);
  }

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <div className="relative">
      <Input
        variant="bordered"
        endContent={
          <button
            className="focus:outline-none"
            type="button"
            onClick={toggleVisibility}
          >
            {isVisible ? (
              <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            ) : (
              <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            )}
          </button>
        }
        type={isVisible ? 'text' : 'password'}
        className="max-w-xs mb-6"
        {...registered}
        {...props}
      />
      {formFieldProps?.message && (
        <span className="absolute bottom-0 left-2 text-red-600 text-[12px]">
          {formFieldProps.message}
        </span>
      )}
    </div>
  );
};
