import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { persistConfig } from './persistConfig';
import { pokemonApi } from './apiSlice';
import { modules } from 'modules';

const { reducer: demoReducer } = modules.demoModule;

export const rootReducer = combineReducers({
  DemoApp: persistReducer(persistConfig.demoConfig, demoReducer),

  // ===== ENDPOINT =====
  [pokemonApi.reducerPath]: pokemonApi.reducer
});
