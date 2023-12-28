import { AppApi } from '@/shared/api';
import { DefaultSchemaType } from '@/shared/types/schema';
import { RootSpinner } from '@/shared/ui/Spinner';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

const AllTypes = () => {
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
          .filter((item: Record<string, string>) => !item.name.startsWith('__'))
          .slice(1);
        setCategories(filtered);
      }
      setIsLoading(false);
    };

    getSchema();
  }, [api]);

  return isLoading ? (
    <RootSpinner />
  ) : (
    <div className={clsx('flex', 'flex-col', 'gap-2', 'p-2')}>
      {categories?.map((item) => (
        <span
          className="text-[#EB9C00] cursor-pointer hover:underline underline-offset-2"
          key={item.name}
        >
          {item.name}
        </span>
      ))}
    </div>
  );
};

export default AllTypes;
