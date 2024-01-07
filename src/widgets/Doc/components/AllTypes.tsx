import { AppApi } from '@/shared/api';
import { DefaultSchemaType } from '@/shared/types/schema';
import { RootSpinner } from '@/shared/ui/Spinner';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import s from './common.module.scss';

type AllTypesProps = {
  openFields: (typeName: string) => void;
};

const AllTypes = ({ openFields }: AllTypesProps) => {
  const [categories, setCategories] = useState<DefaultSchemaType[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const api = AppApi.getInstance();
  useEffect(() => {
    const getSchema = async () => {
      setIsLoading(true);
      const res = await api.getDefaultSchema();
      if (res) {
        // eslint-disable-next-line no-underscore-dangle
        const filtered = res.data.__schema.types
          .filter((item: DefaultSchemaType) => !item.name.startsWith('__'))
          .slice(1);
        setCategories(filtered);
      }
      setIsLoading(false);
    };

    getSchema();
  }, [api]);

  return (
    <div
      className={clsx(
        'select-none',
        'max-h-[calc(100cqh-80px)]',
        'overflow-y-auto',
        s.rtl,
      )}
    >
      <div
        className={clsx(
          'flex',
          'flex-col',
          'gap-2',
          'p-2',
          'pr-11',
          'select-none',
          s.ltr,
        )}
      >
        <h1 className="text-white text-2xl pl-5">Home</h1>
        {isLoading ? (
          <RootSpinner />
        ) : (
          <div className={clsx('flex', 'flex-col', 'gap-2', 'p-2')}>
            {categories?.map((item) => (
              <div key={item.name}>
                <span
                  className="text-[#EB9C00] text-xl cursor-pointer hover:underline underline-offset-2"
                  onClick={() => openFields(item.name)}
                  role="button"
                  tabIndex={0}
                >
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllTypes;
