import { ReactNode } from 'react';
import { clsx } from 'clsx';
import { useSearchParams } from 'react-router-dom';

type PopupLayoutType = {
  isShown: boolean;
  children: ReactNode;
};

const wrapperClasses =
  'w-full h-screen fixed top-0 left-0 z-50 flex justify-center items-center bg-[#00000099]';

export const PopupLayout = ({ children, isShown }: PopupLayoutType) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const closePopup = () => {
    searchParams.delete('popup');
    setSearchParams(searchParams, { replace: true });
  };
  return (
    <div
      className={clsx(wrapperClasses, !isShown && 'hidden')}
      onClick={closePopup}
      onKeyDown={(e) => {
        if (e.code === 'Escape') {
          closePopup();
        }
      }}
      role="button"
      tabIndex={0}
    >
      <div className="relative">
        <div className="absolute transition-opacity duration-300 top-5 right-5 text-white opacity-70 hover:opacity-100">
          &#9587;
        </div>
        {children}
      </div>
    </div>
  );
};
