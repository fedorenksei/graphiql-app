import { HttpResponse, ResponseResolver, http } from 'msw';
import { TEST_BASE_URL, docs } from './mock-data';

const searchResponder: ResponseResolver = async () => {
  return HttpResponse.json(docs, { status: 200 });
};

export const handlers = [http.post(`${TEST_BASE_URL}`, searchResponder)];
