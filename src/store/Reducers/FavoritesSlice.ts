import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICharacter } from '../../models/ICharacter';

interface State {
	favoritesList: ICharacter[];
}

const initialState: State = {
	favoritesList: [],
};

const FavoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		addToFavorite: (state, action: PayloadAction<ICharacter>) => {
			state.favoritesList.push(action.payload);
		},
		deleteFromFavorite: (state, action: PayloadAction<string>) => {
			state.favoritesList = state.favoritesList.filter(
				(item) => item.info !== action.payload
			);
		},
	},
});

export const { addToFavorite, deleteFromFavorite } =
	FavoritesSlice.actions;
export default FavoritesSlice.reducer;
