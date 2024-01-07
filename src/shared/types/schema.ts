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
    kind: string | null;
    name: string | null;
    ofType: ofType | null;
  };
};

type ofType = {
  kind: string | null;
  name: string | null;
  ofType: ofType | null;
};

export type FieldsType = {
  fields: DefaultFieldsType[] | null;
  inputFields: DefaultFieldsType[] | null;
  description: string;
  name: string;
};

export type DefaultFieldsReq = {
  __type: FieldsType;
};
