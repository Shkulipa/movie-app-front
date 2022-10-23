import storage from 'redux-persist/lib/storage';

/**
 * @info
 * example persist:
 * https://codesandbox.io/s/redux-persist-example-5s6yc?file=/store.js
 */
 export const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['auth']
};
