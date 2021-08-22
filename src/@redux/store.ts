import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import {PersistConfig} from 'redux-persist/es/types';
import persistStore from 'redux-persist/es/persistStore';
import AsyncStorage from '@react-native-async-storage/async-storage';

// auth
import {authReducer} from './auth/auth.reducer';
import {appReducer} from './app/app.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  app: appReducer,
});

const persistConfig: PersistConfig<any, any, any, any> = {
  key: 'persist',
  storage: AsyncStorage,
  whitelist: ['auth'],
};

export const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: [],
});

export const persistor = persistStore(store);
