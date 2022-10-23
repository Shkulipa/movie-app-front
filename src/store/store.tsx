import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { reducer as toastrReducer } from 'react-redux-toastr';
import {
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	REHYDRATE,
	persistReducer,
	persistStore
} from 'redux-persist';
import { moviesAPI } from 'src/services/movieAPI.service';
import { authSlice } from './slices/auth/auth.slice';
import { persistConfig } from 'src/config/persist.config';

export const rootReducer = combineReducers({
	[authSlice.name]: authSlice.reducer,
	[moviesAPI.reducerPath]: moviesAPI.reducer,
	toastr: toastrReducer
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware => {
		return getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
			}
		}).concat(moviesAPI.middleware);
	}
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
