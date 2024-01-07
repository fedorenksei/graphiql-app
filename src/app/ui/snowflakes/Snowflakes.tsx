import Snowflakes from 'magic-snowflakes';
import { useState, useEffect } from 'react';

export const SnowBlock = () => {
  const [isSnowInit, setIsSnowInit] = useState(false);

  useEffect(() => {
    if (!isSnowInit) {
      setIsSnowInit(true);

      // eslint-disable-next-line no-new
      new Snowflakes({
        color: '#fff',
        autoResize: false,
        count: 10,
        maxOpacity: 0.8,
        maxSize: 20,
      });
      // eslint-disable-next-line no-new
      new Snowflakes({
        color: '#00b4d8',
        autoResize: false,
        count: 5,
        maxOpacity: 0.8,
        maxSize: 40,
      });
    }
  }, [isSnowInit]);

  return <div />;
};
