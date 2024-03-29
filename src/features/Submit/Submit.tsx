import { setError, setResponse } from '@/app/model/store/slices/responseSlice';
import { AppApi } from '@/shared/api';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/hooks';
import { Button } from '@nextui-org/button';
import { useState, useContext } from 'react';
import { LanguageContext } from '../../shared/languages/LanguageProvider';

export function Submit() {
  const { words } = useContext(LanguageContext);
  const dispatch = useAppDispatch();
  const baseUrl = useAppSelector((state) => state.requestSlice.baseUrl);
  const query = useAppSelector((state) => state.requestSlice.query);
  const variables = useAppSelector((state) => state.requestSlice.variables);
  const headers = useAppSelector((state) => state.requestSlice.headers);
  const [isLoading, setIsLoading] = useState(false);

  const onClick = async () => {
    if (!baseUrl || !query) return;
    setIsLoading(true);
    try {
      const api = AppApi.getInstance();
      const resp = await api.getResponseForQuery({ query, variables, headers });
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
      {words.submitButton}
    </Button>
  );
}
