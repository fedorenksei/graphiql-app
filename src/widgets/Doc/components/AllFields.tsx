import { AppApi } from '@/shared/api';
import { DefaultFieldsType } from '@/shared/types/schema';
import { RootSpinner } from '@/shared/ui/Spinner';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

type AllFieldsPropsType = {
  fieldName: string;
};

export const AllFields = ({ fieldName }: AllFieldsPropsType) => {
  const [fields, setFields] = useState<DefaultFieldsType[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const api = AppApi.getInstance();
  useEffect(() => {
    const getSchema = async () => {
      setIsLoading(true);
      const res = await api.getFieldSchema(fieldName);
      console.log(res);
      if (res) {
        // eslint-disable-next-line no-underscore-dangle
        const filtered = res.data.__type.fields;

        setFields(filtered);
      }
      setIsLoading(false);
    };

    getSchema();
  }, [api, fieldName]);

  return isLoading ? (
    <RootSpinner />
  ) : (
    <div className={clsx('flex', 'flex-col', 'gap-2', 'p-2')}>
      {fields?.map((item) => (
        <div key={JSON.stringify(item)}>
          <div className="pl-2">
            <span
              className="text-[#EB9C00] text-xl cursor-pointer hover:underline underline-offset-2"
              key={item.name}
            >
              {item.name}:{' '}
            </span>
            <span
              className="text-[green] text-xl cursor-pointer hover:underline underline-offset-2"
              key={item.description}
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
