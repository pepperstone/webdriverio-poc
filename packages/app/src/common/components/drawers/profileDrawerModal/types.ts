interface ProfileDrawerModalProps {
  handleLogin: () => void;
  handleSignup: () => void;
}

export type { ProfileDrawerModalProps };
export interface ProfileDrawerModalHooks {
  setAuthKYCIncomplete: () => void;
  setAuthComplete: () => void;
}
