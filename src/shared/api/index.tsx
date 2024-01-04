/* eslint-disable @typescript-eslint/naming-convention */
import { store } from '@/app/model/store/store';

export class AppApi {
  static instance: AppApi;

  private url: string;

  private createReqForFieldSchema: (fieldName: string) => string;

  constructor() {
    this.url =
      store.getState().urlReducer.baseUrl || import.meta.env.VITE_DEFAULT_URL;

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

  public async getResponseForQuery(query: string) {
    const res = await this.sendRequest(query);
    return res;
  }

  private async sendRequest(graphqlQuery: string) {
    let data = null;

    try {
      const res = await fetch(this.url, {
        method: 'POST',
        body: JSON.stringify({
          query: graphqlQuery,
        }),
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
