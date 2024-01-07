import { BaseUrl } from '@/features/BaseUrl';
import { useContext } from 'react';
import { Headers } from '@/features/Headers';
import { Query } from '@/features/Query';
import { Response } from '@/features/Response';
import { Submit } from '@/features/Submit';
import { Variables } from '@/features/Variables';
import { LanguageContext } from '../../shared/languages/LanguageProvider';
import { Doc } from '../Doc';

export const GraphQL = () => {
  const { words } = useContext(LanguageContext);
  return (
    <div className="grid grid-cols-[auto,_1fr]">
      <Doc />
      <div className="grid grid-cols-2 gap-5 p-5">
        <div>
          <div className="flex items-center justify-between">
            <h2>{words.request}</h2>
            <Submit />
          </div>
          <div className="flex flex-col gap-5">
            <BaseUrl />
            <Query />
            <Variables />
            <Headers />
          </div>
        </div>
        <Response />
      </div>
    </div>
  );
};
