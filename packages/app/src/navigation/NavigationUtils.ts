import { NavigationContainerRef, NavigationState } from '@react-navigation/native';

import { RootStackParamList } from './Types';
import { createRef } from 'react';

const navigationRef = createRef<NavigationContainerRef<RootStackParamList>>();

const navigate = (name: keyof RootStackParamList, params?: Record<string, unknown>): void => {
  navigationRef.current?.navigate(name, params);
};

const getNavState = (): NavigationState | undefined => navigationRef?.current?.getRootState();

export {
  navigationRef,
  navigate,
  getNavState,
};
