import { setHeaders } from '@/app/model/store/slices/requestSlice';
import { useAppDispatch } from '@/shared/hooks/hooks';
import { Collapsible } from '@/shared/ui/Collapsible';
import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/react';
import { useState } from 'react';
import { transformHeaders } from './model/transform';
import { UiHeader } from './types/types';

export const Headers = () => {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [uiHeaders, setUiHeaders] = useState<UiHeader[]>([
    { id: 0, name: '', value: '' },
  ]);

  const updateHeaders = (newHeaders: UiHeader[]) => {
    setUiHeaders(newHeaders);
    dispatch(setHeaders(transformHeaders(newHeaders)));
  };

  const handleInputChange = (id: number, name: string, value: string) => {
    const newHeaders = [...uiHeaders];

    const header = newHeaders.filter(
      ({ id: currentId }) => currentId === id,
    )?.[0];
    header.name = name;
    header.value = value;

    updateHeaders(newHeaders);
  };

  const addHeader = () => {
    const newId = uiHeaders.length ? uiHeaders[uiHeaders.length - 1].id + 1 : 0;
    const newHeaders = [...uiHeaders, { id: newId, name: '', value: '' }];
    updateHeaders(newHeaders);
  };

  const removeHeader = (id: number) => {
    const newHeaders = [...uiHeaders];
    const index = newHeaders.findIndex(({ id: currentId }) => currentId === id);
    newHeaders.splice(index, 1);
    updateHeaders(newHeaders);
  };

  return (
    <div className="space-y-3">
      <div
        onClick={() => setIsOpen((v) => !v)}
        role="presentation"
        className="cursor-pointer hover:text-blue-700"
      >
        <p>Headers</p>
      </div>
      <Collapsible isOpen={isOpen}>
        <Button onClick={addHeader}>Add header</Button>
        {uiHeaders.map(({ id, name, value }) => (
          <div
            key={id}
            className="flex gap-2 items-center"
          >
            <Input
              placeholder="Header Key"
              value={name}
              onChange={(e) => handleInputChange(id, e.target.value, value)}
            />
            <Input
              placeholder="Header Value"
              value={value}
              onChange={(e) => handleInputChange(id, name, e.target.value)}
            />
            <Button onClick={() => removeHeader(id)}>Remove</Button>
          </div>
        ))}
      </Collapsible>
    </div>
  );
};
