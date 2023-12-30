import { AppApi } from '@/shared/api';
import { FieldsType } from '@/shared/types/schema';
import { RootSpinner } from '@/shared/ui/Spinner';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { parseFields } from '../model/fieldsParser';
import s from './common.module.scss';

type AllFieldsPropsType = {
  fieldName: string;
  changeFieldName: (fieldName: string) => void;
};

export const AllFields = ({
  fieldName,
  changeFieldName,
}: AllFieldsPropsType) => {
  const [fields, setFields] = useState<FieldsType>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const api = AppApi.getInstance();
  useEffect(() => {
    const getSchema = async () => {
      setIsLoading(true);
      const res = await api.getFieldSchema(fieldName);
      if (res) {
        // eslint-disable-next-line no-underscore-dangle
        const data = res.data.__type;
        if (data) setFields(data);
      }
      setIsLoading(false);
    };

    getSchema();
  }, [api, fieldName]);

  const filtered = parseFields(fields);

  return (
    <div className={clsx('overflow-y-auto', 'max-h-screen', s.rtl)}>
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
        {isLoading ? (
          <RootSpinner />
        ) : (
          <>
            <h3 className="text-white text-2xl pl-5">{fields?.name}</h3>
            <p className="text-white">{fields?.description}</p>
            {filtered?.map((item) => (
              <div key={JSON.stringify(item)}>
                <div className="pl-2">
                  <span
                    className="text-[#EB9C00] text-xl underline-offset-2"
                    key={item.name}
                  >
                    {item.name}:{' '}
                  </span>
                  <span
                    className="text-[green] text-xl cursor-pointer hover:underline underline-offset-2"
                    key={item.description}
                    onClick={() =>
                      changeFieldName(item.type.name!.replace(/[[\]]/g, ''))
                    }
                    role="button"
                    tabIndex={0}
                  >
                    {item.type.name}
                  </span>
                </div>
                <p className="text-white">{item.description}</p>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};
