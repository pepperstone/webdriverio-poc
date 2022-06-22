import { LiveAccountBarParams } from './types';
import { initialParams } from './Constants';
import useInterval from '@use-it/interval';
import { useState } from 'react';

export const useLiveAccountBar = (): LiveAccountBarParams => {
  const [values, setValues] = useState<LiveAccountBarParams>(initialParams);
  const equity = 10000;
  const profitAndLoss = Math.ceil(Math.random() * 10000) * (Math.round(Math.random()) ? 1 : -1);

  useInterval(() => {
    setValues({
      equity,
      profitAndLoss,
    });
  }, 1000);

  return {
    ...values,
  };
};
