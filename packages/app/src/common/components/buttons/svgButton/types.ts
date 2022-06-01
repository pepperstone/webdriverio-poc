import React from 'react';
import { VStyle } from '../../../../lib/types/StyleTypes';
import { SvgProps } from 'react-native-svg';

interface SvgButtonProps {
  onPress: () => void;
  buttonStyles?: VStyle;
  Svg: React.ComponentType<SvgProps & {
    fillSecondary?: string;
  }>;
  fill: string;
  fillSecondary?: string;
}

export type { SvgButtonProps };
