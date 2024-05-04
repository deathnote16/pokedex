import storage from 'redux-persist/lib/storage';
const demoConfig = {
  key: 'demo',
  storage,
  whitelist: ['hello']
};

export const persistConfig = {
  demoConfig
};
