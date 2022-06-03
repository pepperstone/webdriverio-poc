interface InstrumentTileProps {
  id: string;
}

type InstrumentParams = {
  title: string;
  value: string;
  increase: string;
  volume: string;
  data: number[];
};

interface UseInstrumentTileProps {
  loading: boolean;
  values: InstrumentParams;
}

export type {
  InstrumentTileProps,
  InstrumentParams,
  UseInstrumentTileProps,
};
