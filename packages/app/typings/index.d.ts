/**
 * Manual Typings for Project
 */

declare module '*.png' {
  const content: number;
  export default content;
}

declare module '*.jpg' {
  const content: number;
  export default content;
}

declare module '*.svg' {
  import React from 'react';
  import { SvgProps } from 'react-native-svg';

  const content: React.FC<
  SvgProps & {
    fillSecondary?: string;
  }>;
  export default content;
}
