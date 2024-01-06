import { BaseUrl } from '@/features/BaseUrl';
import { Headers } from '@/features/Headers';
import { Query } from '@/features/Query';
import { Response } from '@/features/Response';
import { Submit } from '@/features/Submit';
import { Variables } from '@/features/Variables';

export const GraphQL = () => {
  return (
    <div>
      <div className="grid grid-cols-[1fr,_auto,_1fr] gap-5 p-5">
        <div className="grid gap-5">
          <BaseUrl />
          <Query />
          <Variables />
          <Headers />
        </div>
        <Submit />
        <Response />
      </div>
    </div>
  );
};
