import { AppApi } from '@/shared/api';
import { useAppSelector } from '@/shared/hooks/hooks';
import { useEffect, useState } from 'react';

export const Response = () => {
  const endpoint = useAppSelector((state) => state.urlReducer.baseUrl);
  const query = useAppSelector((state) => state.queryReducer.value);
  const [error, setError] = useState('');
  const [response, setResponse] = useState('');

  useEffect(() => {
    if (!endpoint || !query) return;
    const fetchData = async () => {
      const api = AppApi.getInstance();
      try {
        const resp = await api.getResponseForQuery(query);
        setResponse(JSON.stringify(resp));
        setError('');
      } catch {
        setError('Something went wrong');
        setResponse('');
      }
    };
    fetchData();
  }, [endpoint, query]);

  return (
    <div>
      Response
      <p>{response}</p>
      <p>{error}</p>
    </div>
  );
};
