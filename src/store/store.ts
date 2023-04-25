import { combineReducers, configureStore } from '@reduxjs/toolkit';
import CharacterSlice from './Reducers/CharacterSlice';
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import { CharactersApi } from '../services/CharactersApi';
import storage from 'redux-persist/lib/storage';
import FavoritesSlice from './Reducers/FavoritesSlice';

const rootReducer = combineReducers({
	[CharactersApi.reducerPath]: CharactersApi.reducer,
	character: CharacterSlice,
	favorites: FavoritesSlice,
});

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['character', 'favorites'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [
					FLUSH,
					REHYDRATE,
					PAUSE,
					PERSIST,
					PURGE,
					REGISTER,
				],
			},
		}).concat(CharactersApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
