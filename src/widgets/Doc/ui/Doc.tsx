/* eslint-disable jsx-a11y/no-static-element-interactions */
import { RootSpinner } from '@/shared/ui/Spinner';
import clsx from 'clsx';
import { MouseEvent, Suspense, lazy, useRef, useState } from 'react';
import { DOC_PARTS } from '@/shared/types/doc';
import { AllFields } from '../components/AllFields';

import s from './Doc.module.scss';

const MIN_WIDTH = 320;

const AllTypes = lazy(() => import('../components/AllTypes'));

export const Doc = () => {
  const [isDocOpen, setIsDocsOpen] = useState<boolean>(false);
  const [choosenType, setChoosenType] = useState<string>('');
  const [currDocPart, setCurrDocPart] = useState<DOC_PARTS>(DOC_PARTS.SCHEMA);
  const [currWidth, setCurrWidth] = useState<number>(MIN_WIDTH);

  const blockRef = useRef<HTMLDivElement>(null);

  let component = null;

  const openFields = (typeName: string) => {
    setCurrDocPart(DOC_PARTS.FIELDS);
    setChoosenType(typeName);
  };

  const toMain = () => {
    setCurrDocPart(DOC_PARTS.SCHEMA);
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
          <AllFields
            fieldName={choosenType}
            changeFieldName={openFields}
            goBack={toMain}
          />
        </Suspense>
      );
      break;
    default:
      component = null;
  }

  const handleMouseMove = (e: globalThis.MouseEvent) => {
    if (e.clientX < MIN_WIDTH) return;
    setCurrWidth(e.clientX);
  };
  const stopCursorWatch = () => {
    document.removeEventListener('mousemove', handleMouseMove);
  };

  const startCursorWatch = () => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', stopCursorWatch, { once: true });
  };

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    startCursorWatch();
  };

  return (
    <div
      style={{ width: currWidth }}
      ref={blockRef}
      className={clsx(
        'absolute',
        'top-0',
        !isDocOpen && '-translate-x-full',
        'h-screen',
        'transition-all',
        'duration-400',
        'bg-slate-800',
        'font-mono',
        'max-w-full',
        'select-none',
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
          'duration-300',
          isDocOpen
            ? 'right-0 bg-white text-slate-800 rounded-l-xl'
            : `-right-10 bg-slate-800 text-white rounded-r-xl ${s.glowing}`,
          'w-10',
          'h-40',
          'absolute',
          'top-10',
          'z-10',
          'select-none',
        )}
      >
        {isDocOpen ? 'hide schema' : 'show schema'}
      </button>
      <div
        onMouseDown={handleMouseDown}
        draggable={false}
        className="h-52 absolute right-1 top-[220px] w-[8px] cursor-col-resize"
      >
        <div className="border-r border-l border-warning h-full w-[4px] mx-auto" />
      </div>
      {isDocOpen && component}
    </div>
  );
};
