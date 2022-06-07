import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  PersistConfig,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';

import { configureStore } from '@reduxjs/toolkit';
import createDebugger from 'redux-flipper';
import { reduxStorage } from './storage';
import rootReducer from './rootReducer';

export type AppState = ReturnType<typeof rootReducer>;

const persistConfig = {
  key: 'root',
  storage: reduxStorage,
} as PersistConfig<AppState>;

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = ({
  immutableCheck: false,
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
});

const store = configureStore({
  reducer: persistedReducer,
  devTools: __DEV__ ? true : false,
  middleware: (getDefaultMiddleware) => {
    if (__DEV__ && !process.env.JEST_WORKER_ID) return getDefaultMiddleware(middlewares).concat(createDebugger());
    return getDefaultMiddleware(middlewares);
  },
});

export const persistor = persistStore(store);

export default store;
