import { configureStore } from '@reduxjs/toolkit';
import MMKVStorage from 'react-native-mmkv-storage';
import {
  persistStore, persistReducer, PersistConfig,
  FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,
} from 'redux-persist';

import createDebugger from 'redux-flipper';

import rootReducer from './rootReducer';

export type AppState = ReturnType<typeof rootReducer>;

const storage = new MMKVStorage.Loader().initialize();

const persistConfig = {
  key: 'root',
  storage,
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
    if (__DEV__) return getDefaultMiddleware(middlewares).concat(createDebugger());
    return getDefaultMiddleware(middlewares);
  },
});

export const persistor = persistStore(store);

export default store;
