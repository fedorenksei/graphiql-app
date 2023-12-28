import { RootSpinner } from '@/shared/ui/Spinner';
import clsx from 'clsx';
import { Suspense, lazy, useState } from 'react';

const AllTypes = lazy(() => import('../components/AllTypes'));

export const Doc = () => {
  const [isDocOpen, setIsDocsOpen] = useState<boolean>(false);
  return (
    <div className="relative w-screen h-screen">
      <div
        className={clsx(
          'absolute',
          'top-0',
          !isDocOpen && '-translate-x-80',
          'w-[320px]',
          'h-screen',
          'transition-all',
          'duration-400',
          'bg-slate-800',
        )}
      >
        <button
          type="button"
          onClick={() => setIsDocsOpen((prev) => !prev)}
          className={clsx(
            "content-['show_schema']",
            '[writing-mode:vertical-lr]',
            'text-center',
            'leading-10',
            'transition-all',
            'duration-400',
            isDocOpen
              ? 'right-0 bg-white text-slate-800 rounded-l-xl'
              : '-right-10 bg-slate-800 text-white rounded-r-xl',
            '-translate-y-2/4',
            'w-10',
            'h-40',
            'absolute',
            'top-2/4',
          )}
        >
          {isDocOpen ? 'hide schema' : 'show schema'}
        </button>
        {isDocOpen && (
          <Suspense fallback={<RootSpinner />}>
            <AllTypes />
          </Suspense>
        )}
      </div>
    </div>
  );
};
