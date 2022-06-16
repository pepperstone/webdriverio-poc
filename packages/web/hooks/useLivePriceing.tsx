import { useEffect, useState } from "react";

type Price = {
  ask: string;
  bid: string;
};

type Quote = {
  [key: string]: Price;
};

const API_URL = "https://live-pricing.pepperstone.com/quotes";

const useLivePricing = (symbols: string, refreshRate: number) => {
  const [data, setData] = useState<Quote>({});
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Only run if there are symobls
    if (symbols.length > 0) {
      const intervalId = setInterval(() => {
        setLoading(true);
        setError(null);

        fetch(API_URL + "?symbols=" + symbols)
          .then((response) => response.json())
          .then((data) => {
            setData(data);
            setLoaded(true);
            setLoading(false);
          })
          .catch((error) => {
            setError(error);
            setLoading(false);
          });
      }, refreshRate);

      return () => clearInterval(intervalId);
    }
  }, [symbols]);

  return {
    data,
    loading,
    loaded,
    error,
  };
};

export default useLivePricing;
