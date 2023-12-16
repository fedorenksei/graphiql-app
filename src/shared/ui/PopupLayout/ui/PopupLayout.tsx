import React from 'react';

const wrapperClasses =
  'w-full h-screen fixed top-0 left-0 z-50 flex justify-center items-center bg-[#00000099]';

export const PopupLayout = ({ children }: React.PropsWithChildren) => {
  return <div className={wrapperClasses}>{children}</div>;
};
