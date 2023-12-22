/* eslint-disable @typescript-eslint/naming-convention */
import { store } from '@/app/model/store/store';

export class AppApi {
  static instance: AppApi;

  private url: string;

  constructor() {
    this.url =
      store.getState().urlReducer.baseUrl || import.meta.env.VITE_DEFAULT_URL;
  }

  public static getInstance() {
    if (!AppApi.instance) {
      AppApi.instance = new AppApi();
    }
    return AppApi.instance;
  }

  public async getDefaultSchema() {
    let data = null;

    try {
      const res = await fetch(this.url, {
        method: 'POST',
        body: JSON.stringify({
          query: `{__schema {types {name}}}`,
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
