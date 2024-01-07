/* eslint-disable @typescript-eslint/naming-convention */
import { openPopup } from '@/app/model/store/slices/popupSlice';
import { store } from '@/app/model/store/store';
import { ERROR_NAMES } from '../constants/errors';

export class AppApi {
  static instance: AppApi;

  private createReqForFieldSchema: (fieldName: string) => string;

  constructor() {
    this.createReqForFieldSchema = (fieldName: string) => {
      return `query IntrospectionQuery {
        __type(name: "${fieldName}") {
          name
          description
          fields {
            name
            description
            type {
              name
              kind  
              ofType {
                kind
                name
                ofType {
                  kind
                  name
                  ofType {
                    kind
                    name
                    ofType {
                      kind
                      name
                      ofType {
                        kind
                        name
                        ofType {
                          kind
                          name
                          ofType {
                            kind
                            name
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          inputFields {
            name
            description
            type {
              name
            }
          }
        }
      }`;
    };
  }

  public static getInstance() {
    if (!AppApi.instance) {
      AppApi.instance = new AppApi();
    }
    return AppApi.instance;
  }

  public async getDefaultSchema() {
    const res = await this.sendRequest('{__schema {types {name}}}');
    return res;
  }

  public async getFieldSchema(fieldName: string) {
    const res = await this.sendRequest(this.createReqForFieldSchema(fieldName));
    return res;
  }

  public async getResponseForQuery({
    query,
    variables,
    headers,
  }: {
    query: string;
    variables?: string;
    headers?: Record<string, string>;
  }) {
    const res = await this.sendRequest(query, variables, headers);
    return res;
  }

  // eslint-disable-next-line class-methods-use-this
  private async sendRequest(
    graphqlQuery: string,
    variables?: string,
    headers?: Record<string, string>,
  ) {
    const { baseUrl } = store.getState().requestSlice;

    let data = null;
    const body: { query: string; variables?: object } = {
      query: graphqlQuery,
    };
    if (variables) body.variables = JSON.parse(variables);

    const defaultHeaders = {
      'Content-Type': 'application/json',
      ...headers,
    };
    const finalHeaders = headers
      ? {
          ...defaultHeaders,
          ...headers,
        }
      : defaultHeaders;

    try {
      const res = await fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: finalHeaders,
      });

      if (res.status > 500) {
        store.dispatch(openPopup({ name: ERROR_NAMES.SERVER }));
      } else if (res.status > 400) {
        store.dispatch(openPopup({ name: ERROR_NAMES.URL }));
      }

      data = await res.json();
    } catch (error) {
      if (error instanceof TypeError) {
        if (error.message === 'Failed to fetch') {
          store.dispatch(openPopup({ name: ERROR_NAMES.NETWORK }));
        }
      }
    }
    return data;
  }
}
