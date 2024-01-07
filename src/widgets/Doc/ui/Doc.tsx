/* eslint-disable jsx-a11y/no-static-element-interactions */
import { RootSpinner } from '@/shared/ui/Spinner';
import clsx from 'clsx';
import {
  MouseEvent,
  Suspense,
  lazy,
  useRef,
  useState,
  useContext,
} from 'react';
import { DOC_PARTS } from '@/shared/types/doc';
import { Button } from '@nextui-org/button';
import { AllFields } from '../components/AllFields';
import { LanguageContext } from '../../../shared/languages/LanguageProvider';

import s from './Doc.module.scss';

const MIN_WIDTH = 320;

const AllTypes = lazy(() => import('../components/AllTypes'));

export const Doc = () => {
  const [isDocOpen, setIsDocsOpen] = useState<boolean>(false);
  const [choosenType, setChoosenType] = useState<string>('');
  const [currDocPart, setCurrDocPart] = useState<DOC_PARTS>(DOC_PARTS.SCHEMA);
  const [history, setHistory] = useState<Array<() => void>>([]);
  let component = null;

  const pushHistory = () => {
    const callback = () => {
      setCurrDocPart(currDocPart);
      setChoosenType(choosenType);
    };
    setHistory((prev) => [...prev, callback]);
  };

  const goBack = () => {
    if (history.length === 0) return;
    const cb = history.pop();
    if (cb) {
      cb();
    }
    setHistory(history);
  };

  const openFields = (typeName: string) => {
    pushHistory();
    setCurrDocPart(DOC_PARTS.FIELDS);
    setChoosenType(typeName);
  };

  const toMain = () => {
    pushHistory();
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
          />
        </Suspense>
      );
      break;
    default:
      component = null;
  }

  // TODO Move to custom hook
  const [currWidth, setCurrWidth] = useState<number>(MIN_WIDTH);
  const blockRef = useRef<HTMLDivElement>(null);

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

  const { words } = useContext(LanguageContext);

  return (
    <div
      style={{ width: currWidth }}
      ref={blockRef}
      className={clsx(
        'absolute',
        'top-0',
        'left-0',
        !isDocOpen && '-translate-x-full',
        'min-h-screen',
        'transition-all',
        'duration-400',
        'bg-slate-800',
        'font-mono',
        'max-w-full',
        'select-none',
        'pt-[60px]',
        'z-20',
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
          'top-32',
          'z-10',
          'select-none',
        )}
      >
        {isDocOpen ? words.hideSchema : words.showSchema}
      </button>
      <div
        onMouseDown={handleMouseDown}
        draggable={false}
        className="h-52 absolute right-1 top-[320px] w-[8px] cursor-col-resize"
      >
        <div className="border-r border-l border-warning h-full w-[4px] mx-auto" />
      </div>
      <div className="flex justify-around px-10 py-5">
        <Button
          type="button"
          disabled={currDocPart === DOC_PARTS.SCHEMA}
          className={clsx(
            'text-slate-800',
            'bg-[#EB9C00]',
            'shadow-inner',
            'shadow-md',
            'leading-9',
            'w-8',
            'flex',
            'justify-center',
            'items-center',
            'rounded-sm',
            'text-slate-800',
            'hover:bg-[#EB9C00]',
            'hover:opacity-1',
            'enabled:hover:scale-[1.1]',
            'enabled:hover:opacity-100',
            'disabled:opacity-50',
            'disabled:hover:opacity-50',
          )}
          onClick={toMain}
        >
          <span className="text-xl">{words.homeButton}</span>
        </Button>
        <Button
          type="button"
          disabled={history.length === 0}
          className={clsx(
            'text-slate-800',
            'bg-[#EB9C00]',
            'shadow-inner',
            'shadow-md',
            'leading-9',
            'w-8',
            'flex',
            'justify-center',
            'items-center',
            'rounded-sm',
            'text-slate-800',
            'hover:bg-[#EB9C00]',
            'hover:opacity-1',
            'enabled:hover:scale-[1.1]',
            'enabled:hover:opacity-100',
            'disabled:opacity-50',
            'disabled:hover:opacity-50',
            'font-extrabold',
          )}
          onClick={goBack}
        >
          <span className="text-[28px]">&#8592;</span>
        </Button>
      </div>
      {isDocOpen && component}
    </div>
  );
};
