import React from 'react';

export interface ModalProps {
  isShowing: boolean;
  headerText: string;
  toggle: () => void;
  children?: React.ReactNode;
}
