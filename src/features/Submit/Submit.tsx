import { setError, setResponse } from '@/app/model/store/slices/responseSlice';
import { AppApi } from '@/shared/api';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/hooks';
import { Button } from '@nextui-org/button';
import { useState } from 'react';

export default function Submit() {
  const dispatch = useAppDispatch();
  const baseUrl = useAppSelector((state) => state.urlReducer.baseUrl);
  const query = useAppSelector((state) => state.urlReducer.query);
  const [isLoading, setIsLoading] = useState(false);

  const onClick = async () => {
    if (!baseUrl || !query) return;
    setIsLoading(true);
    try {
      const api = AppApi.getInstance();
      const resp = await api.getResponseForQuery(query);
      dispatch(setResponse(JSON.stringify(resp)));
      dispatch(setError(''));
    } catch {
      dispatch(setError('Something went wrong'));
      dispatch(setResponse(''));
    }
    setIsLoading(false);
  };

  return (
    <Button
      type="button"
      className="justify-self-end"
      onClick={onClick}
      isLoading={isLoading}
      isDisabled={!baseUrl || !query}
    >
      Submit
    </Button>
  );
}
