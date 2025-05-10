import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/slice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};

const rootReducer = combineReducers({
    auth: persistReducer(authPersistConfig, authReducer),
    // contacts: contactsReducer, (додай, якщо буде)
    // filters: filtersReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
});

export const persistor = persistStore(store);
