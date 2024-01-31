import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistStore
} from 'redux-persist';
import { pokemonApi } from './apiSlice';

const middlewareOptions = {
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
  }
};

const createStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware(middlewareOptions).concat(pokemonApi.middleware)
  });
  return store;
};

export const store = createStore();
export const persistor = persistStore(store);

//typescript that will help us easily fetch state data
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
