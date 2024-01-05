import { useAppSelector } from '@/shared/hooks/hooks';

export const Response = () => {
  const response = useAppSelector((state) => state.responseSlice.response);
  const error = useAppSelector((state) => state.responseSlice.error);
  const result = response || error;

  return (
    <div>
      Response
      <p>{result}</p>
    </div>
  );
};
