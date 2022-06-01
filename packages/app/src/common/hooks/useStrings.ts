import STRINGS from 'assets/Localisation';

const useStrings = (): Strings => STRINGS;

export type Strings = typeof STRINGS;

export default useStrings;
