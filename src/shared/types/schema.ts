/* eslint-disable @typescript-eslint/naming-convention */
export type DefaultSchemaType = {
  name: string;
};

export type DefaultSchemaReq = {
  __schema: {
    types: DefaultSchemaType[];
  };
};

export type DefaultFieldsType = {
  name: string;
  description: string;
  type: {
    kind: string;
    name: string;
  };
};

export type DefaultFieldsReq = {
  __type: {
    fields: DefaultFieldsType[];
    name: string;
  };
};
