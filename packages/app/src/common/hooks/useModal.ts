import { useState } from 'react';

const useModal = (
  defaultValue = false
): { isShowing: boolean; toggle: () => void } => {
  const [isShowing, setIsShowing] = useState(defaultValue);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return {
    isShowing,
    toggle,
  };
};

export default useModal;
