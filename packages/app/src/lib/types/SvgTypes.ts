import React from 'react';
import { SvgProps } from 'react-native-svg';

/** React Native Component Style Prop */
export type SvgType = React.FunctionComponent<SvgProps & {
  fillSecondary?: string;
}>;
