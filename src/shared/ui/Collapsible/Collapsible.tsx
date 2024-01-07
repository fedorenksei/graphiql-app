import { PropsWithChildren } from 'react';

export const Collapsible = ({
  isOpen,
  children,
}: PropsWithChildren<{ isOpen: boolean }>) => {
  return (
    <div
      className={`grid transition-all overflow-hidden ${
        isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
      }`}
    >
      <div className="min-h-0">{children}</div>
    </div>
  );
};
