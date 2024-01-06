/* eslint-disable @typescript-eslint/naming-convention */
import { store } from '@/app/model/store/store';

export class AppApi {
  static instance: AppApi;

  private url: string;

  private createReqForFieldSchema: (fieldName: string) => string;

  constructor() {
    this.url =
      store.getState().requestSlice.baseUrl || import.meta.env.VITE_DEFAULT_URL;

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
  }: {
    query: string;
    variables?: string;
  }) {
    const res = await this.sendRequest(query, variables);
    return res;
  }

  private async sendRequest(graphqlQuery: string, variables?: string) {
    let data = null;

    try {
      const body: { query: string; variables?: object } = {
        query: graphqlQuery,
      };
      if (variables) body.variables = JSON.parse(variables);

      const res = await fetch(this.url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      data = await res.json();
    } catch (error) {
      console.log(error);
    }
    return data;
  }
}
