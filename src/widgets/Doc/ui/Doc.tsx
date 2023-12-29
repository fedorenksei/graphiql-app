import { RootSpinner } from '@/shared/ui/Spinner';
import clsx from 'clsx';
import { Suspense, lazy, useState } from 'react';
import { DOC_PARTS } from '@/shared/types/doc';
import { AllFields } from '../components/AllFields';

const AllTypes = lazy(() => import('../components/AllTypes'));

export const Doc = () => {
  const [isDocOpen, setIsDocsOpen] = useState<boolean>(false);
  const [choosenType, setChoosenType] = useState<string>('');
  const [currDocPart, setCurrDocPart] = useState<DOC_PARTS>(DOC_PARTS.SCHEMA);
  let component = null;

  const openFields = (typeName: string) => {
    setCurrDocPart(DOC_PARTS.FIELDS);
    setChoosenType(typeName);
  };

  switch (currDocPart) {
    case DOC_PARTS.SCHEMA:
      component = (
        <Suspense fallback={<RootSpinner />}>
          <AllTypes openFields={openFields} />
        </Suspense>
      );
      break;
    case DOC_PARTS.FIELDS:
      component = (
        <Suspense fallback={<RootSpinner />}>
          <AllFields fieldName={choosenType} />
        </Suspense>
      );
      break;
    default:
      component = null;
  }

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
        {isDocOpen && component}
      </div>
    </div>
  );
};
