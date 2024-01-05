import { setError, setResponse } from '@/app/model/store/slices/responseSlice';
import { AppApi } from '@/shared/api';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/hooks';
import { Button } from '@nextui-org/button';

export default function Submit() {
  const dispatch = useAppDispatch();
  const baseUrl = useAppSelector((state) => state.urlReducer.baseUrl);
  const query = useAppSelector((state) => state.urlReducer.query);

  const onClick = () => {
    if (!baseUrl || !query) return;
    const fetchData = async () => {
      const api = AppApi.getInstance();
      try {
        const resp = await api.getResponseForQuery(query);
        const value = JSON.stringify(resp);
        dispatch(setResponse(value));
        dispatch(setError(''));
      } catch {
        dispatch(setError('Something went wrong'));
        dispatch(setResponse(''));
      }
    };
    fetchData();
  };

  return (
    <Button
      type="button"
      className="justify-self-end"
      onClick={onClick}
    >
      Submit
    </Button>
  );
}
