import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { persistConfig } from './persistConfig';
import { pokemonApi } from './apiSlice';
import { modules } from 'modules';

const { reducer: demoReducer } = modules.demoModule;
const { reducer: apiPayloadReducer } = modules.apiPayload;
const { reducer: drawerReducer } = modules.drawer;
const { reducer: globalEventReducers } = modules.globalEvent;

export const rootReducer = combineReducers({
  DemoApp: persistReducer(persistConfig.demoConfig, demoReducer),
  ApiPayload: apiPayloadReducer,
  Drawer: drawerReducer,
  GlobalEvent: globalEventReducers,
  // ===== ENDPOINT =====
  [pokemonApi.reducerPath]: pokemonApi.reducer
});
