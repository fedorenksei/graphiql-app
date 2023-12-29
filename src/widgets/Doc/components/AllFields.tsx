import { AppApi } from '@/shared/api';
import { FieldsType } from '@/shared/types/schema';
import { RootSpinner } from '@/shared/ui/Spinner';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { parseFields } from '../model/fieldsParser';

type AllFieldsPropsType = {
  fieldName: string;
  goBack: () => void;
  changeFieldName: (fieldName: string) => void;
};

export const AllFields = ({
  fieldName,
  goBack,
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

  return isLoading ? (
    <RootSpinner />
  ) : (
    <div className={clsx('flex', 'flex-col', 'gap-2', 'p-2')}>
      <button
        type="button"
        className="text-red-700 text-5xl"
        onClick={goBack}
      >
        &#8592;
      </button>
      <h3 className="text-white">{fields?.name}</h3>
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
    </div>
  );
};