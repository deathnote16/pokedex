import { modules } from "@/module";
import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import { persistConfig } from "./persistConfig";

const { reducer: demoReducer } = modules.demoModule;

export const rootReducer = combineReducers({
  DemoApp: persistReducer(persistConfig.democonfig, demoReducer),
});
