export type DefaultSchemaType = {
  name: string;
};

export type DefaultSchemaReq = {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  __schema: {
    types: DefaultSchemaType[];
  };
};
