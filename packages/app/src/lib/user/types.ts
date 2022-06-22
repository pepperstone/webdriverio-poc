
export enum AuthStatus {
  NONE = 0,
  GUEST = 1,
  LOGGED_IN = 2,
}
export interface UserState {
  authStatus: AuthStatus;
}
