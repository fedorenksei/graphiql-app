import { useAppSelector } from '@/shared/hooks/hooks';

export const Response = () => {
  const response = useAppSelector((state) => state.responseSlice.response);
  const error = useAppSelector((state) => state.responseSlice.error);
  let result = response || error;
  if (result) result = JSON.stringify(JSON.parse(result), null, '  ');

  return (
    <div>
      Response
      <pre>{result}</pre>
    </div>
  );
};
