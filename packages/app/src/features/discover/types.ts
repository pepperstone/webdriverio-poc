import { DiscoverScreen } from '../../navigation/Types';

interface DiscoverScreenProps extends DiscoverScreen {}

interface UseDiscoverProps {
  doLogout: () => void;
  loading: boolean;
}

export type {
  DiscoverScreenProps,
  UseDiscoverProps,
};
