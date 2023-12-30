/* eslint-disable @typescript-eslint/no-unused-vars */
import Snowflakes from 'magic-snowflakes';
import { useState, useEffect } from 'react';

export const SnowBlock = () => {
  const [isSnowInit, setIsSnowInit] = useState(false);

  useEffect(() => {
    if (!isSnowInit) {
      setIsSnowInit(true);

      const whiteSnow = new Snowflakes({
        color: '#fff',
        autoResize: false,
        count: 20,
        maxOpacity: 0.8,
        maxSize: 20,
      });
      const bigSnow = new Snowflakes({
        color: '#00b4d8',
        autoResize: false,
        count: 10,
        maxOpacity: 0.8,
        maxSize: 40,
      });
      const mediumSnow = new Snowflakes({
        color: '#ADE8F4',
        autoResize: false,
        count: 20,
        maxOpacity: 0.8,
        maxSize: 20,
      });
    }
  }, []);

  return <div />;
};
