interface GuestMenuProps {
  handleLogin: () => void;
  handleSignup: () => void;
}

interface UseGuestMenuHookProps {
  onLinkPressed: (
    title: string,
    url: string
  ) => void;
}

export type {
  GuestMenuProps,
  UseGuestMenuHookProps,
};
