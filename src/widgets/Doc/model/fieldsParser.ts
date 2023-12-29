import { DefaultFieldsType, FieldsType } from '@/shared/types/schema';

export const parseFields = (fields: FieldsType | undefined) => {
  let res = null;
  if (Array.isArray(fields?.fields)) {
    res = fields?.fields?.map((item: DefaultFieldsType) => {
      let currType = item.type;
      let isArray = false;
      while (currType.name === null && currType.ofType !== null) {
        currType = currType.ofType;
        if (currType.kind === 'LIST') {
          isArray = true;
        }
      }

      if (isArray && !currType.name?.startsWith('[')) {
        currType.name = `[${currType.name}]`;
      }

      return {
        name: item.name,
        type: currType,
        description: item.description,
      };
    });
  } else if (Array.isArray(fields?.inputFields)) {
    res = fields.inputFields;
  }

  return res;
};
