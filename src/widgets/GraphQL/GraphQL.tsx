import { BaseUrl } from '@/features/BaseUrl';
import { Headers } from '@/features/Headers';
import { Query } from '@/features/Query';
import { Response } from '@/features/Response';
import Submit from '@/features/Submit/Submit';
import { Variables } from '@/features/Variables';

export const GraphQL = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-5 p-5">
        <div className="grid gap-5">
          <BaseUrl />
          <Query />
          <Submit />
          <Headers />
          <Variables />
        </div>
        <Response />
      </div>
    </div>
  );
};
