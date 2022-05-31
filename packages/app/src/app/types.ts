import store from './store';

export type AppState = ReturnType<typeof store.getState>;
export type AppThunkDispatch = typeof store.dispatch;
