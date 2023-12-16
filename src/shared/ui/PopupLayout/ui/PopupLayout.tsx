import { ReactNode } from 'react';
import { clsx } from 'clsx';

type PopupLayoutType = {
  isShown: boolean;
  children: ReactNode;
};

const wrapperClasses =
  'w-full h-screen fixed top-0 left-0 z-50 flex justify-center items-center bg-[#00000099]';

export const PopupLayout = ({ children, isShown }: PopupLayoutType) => {
  return (
    <div className={clsx(wrapperClasses, !isShown && 'hidden')}>{children}</div>
  );
};
