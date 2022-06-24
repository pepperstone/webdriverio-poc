import { useEffect, useState } from "react";

type Instrument = {
  symbol: string;
  ticker: string;
  description: string;
  display_ticker: string;
  volume_change: number;
};

const API_URL = "/api/instruments/trending";

const useTrendingInstr = (categories: string) => {
  const [data, setData] = useState<Instrument[]>([]);
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);

  if (categories === "") {
    categories = "All";
  }

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(API_URL + "?categories=" + categories)
      .then((response) => response.json())
      .then((data) => {
        setData(data.instruments);
        setLoaded(true);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [categories]);

  return {
    data,
    loading,
    loaded,
    error,
  };
};

export default useTrendingInstr;
