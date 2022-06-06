import { InstrumentParams, InstrumentTileProps, UseInstrumentTileProps } from './types';
import { useEffect, useState } from 'react';

import { initialParams } from './Constants';

export const useInstrumentTileHook = ({ id }: InstrumentTileProps): UseInstrumentTileProps => {
  const [loading, setLoading] = useState<boolean>(true);
  const [values, setValues] = useState<InstrumentParams>(initialParams);

  useEffect(() => {
    const getValues = () => {
      // set title
      setValues({
        ...initialParams,
        title: id,
      });

      // Mock getting latest values from API
      setTimeout(() => {
        setValues({
          title: id,
          value: `${(Math.random() * 100).toFixed(5)}`,
          increase: `+${(Math.random() * 100).toFixed(2)}%`,
          volume: `Vol: ${(Math.random() * 100).toFixed(2)}%`,
          data: Array.from({ length: 25 }, () => Math.floor(Math.random() * 100)),
        });

        setLoading(false);
      }, 2000);
    };

    getValues();
  }, [id]);

  return {
    values,
    loading,
  };
};
