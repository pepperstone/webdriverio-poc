import STRINGS from 'assets/Localisation';
import { StringsType } from 'assets/Localisation/Languages/types';

const useStrings = (): StringsType => {
  const strings: StringsType = STRINGS;
  return strings;
};

export default useStrings;
