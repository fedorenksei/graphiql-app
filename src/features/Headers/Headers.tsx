import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/react';
import { useState } from 'react';

export const Headers = () => {
  const [headers, setHeaders] = useState([{ id: 0, key: '', value: '' }]);

  const handleInputChange = (id: number, key: string, value: string) => {
    const newHeaders = [...headers];

    const header = newHeaders.filter(
      ({ id: currentId }) => currentId === id,
    )?.[0];
    header.key = key;
    header.value = value;

    setHeaders(newHeaders);
  };

  const addHeader = () => {
    const newId = headers[headers.length - 1].id + 1;
    const newHeaders = [...headers, { id: newId, key: '', value: '' }];
    setHeaders(newHeaders);
  };

  const removeHeader = (id: number) => {
    const newHeaders = [...headers];
    const index = newHeaders.findIndex(({ id: currentId }) => currentId === id);
    newHeaders.splice(index, 1);
    setHeaders(newHeaders);
  };

  return (
    <div className="space-y-3">
      <p>Headers</p>
      <Button onClick={addHeader}>Add header</Button>
      {headers.map(({ id, key, value }) => (
        <div
          key={id}
          className="flex gap-2 items-center"
        >
          <Input
            placeholder="Header Key"
            value={key}
            onChange={(e) => handleInputChange(id, e.target.value, value)}
          />
          <Input
            placeholder="Header Value"
            value={value}
            onChange={(e) => handleInputChange(id, key, e.target.value)}
          />
          <Button onClick={() => removeHeader(id)}>Remove</Button>
        </div>
      ))}
    </div>
  );
};
