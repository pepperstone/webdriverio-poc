
export enum AuthStatus {
  NONE = 0,
  GUEST = 1,
  KYC_INCOMPLETE = 2,
  LOGGED_IN = 3,
}
export interface UserState {
  authStatus: AuthStatus;
}
