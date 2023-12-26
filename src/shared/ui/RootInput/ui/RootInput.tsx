import { FormFieldProps } from '@/shared/types/forms';
import { Input, InputProps } from '@nextui-org/react';
import { useFormContext } from 'react-hook-form';

interface ExtendedProps extends InputProps {
  formFieldProps: FormFieldProps | null;
}

export const RootInput = (props: ExtendedProps) => {
  const { formFieldProps } = props;
  let registered = {};
  const { register } = useFormContext();
  if (formFieldProps) {
    const { validator, name } = formFieldProps;
    registered = register(name, validator);
    // registered = register(name, validator);
  }
  return (
    <div className="relative">
      <Input
        variant="bordered"
        {...registered}
        {...props}
        className="mb-6"
      />
      {formFieldProps?.message && (
        <span className="absolute bottom-0 left-2 text-red-600 text-[12px]">
          {formFieldProps.message}
        </span>
      )}
    </div>
  );
};
