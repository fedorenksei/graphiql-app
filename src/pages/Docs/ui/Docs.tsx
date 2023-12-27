import { AppApi } from '@/shared/api';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

export const Docs = () => {
  const [isDocOpen, setIsDocsOpen] = useState<boolean>(false);
  const [schemaCategories, setSchemaCategories] =
    useState<Record<string, string>[]>();
  const api = AppApi.getInstance();
  useEffect(() => {
    const getSchema = async () => {
      const res = await api.getDefaultSchema();
      // eslint-disable-next-line no-underscore-dangle
      if (res) setSchemaCategories(res.data.__schema.types);
    };

    getSchema();
  });
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
        <div className={clsx('flex', 'flex-col', 'gap-2', 'p-2')}>
          {schemaCategories?.map((item) => (
            <span className="text-white">{item.name}</span>
          ))}
        </div>
      </div>
    </div>
  );
};
