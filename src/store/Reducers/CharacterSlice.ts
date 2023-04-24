import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ICharacter } from './../../models/ICharacter';
import { getSingleCharacter } from './ActionCreators';

type State = {
	characterList: ICharacter[];
	currentCharacter: ICharacter | null;
	Loading: boolean;
	Error: string;
};

const initialState: State = {
	characterList: [],
	currentCharacter: null,
	Loading: false,
	Error: '',
};

const CharacterSlice = createSlice({
	name: 'character',
	initialState,
	reducers: {
		setCurrentCharacter: (
			state,
			action: PayloadAction<ICharacter>
		) => {
			state.currentCharacter = action.payload;
		},
	},

	extraReducers(builder) {
		builder.addCase(getSingleCharacter.pending, (state) => {
			state.Loading = true;
			state.Error = '';
		});
		builder.addCase(getSingleCharacter.fulfilled, (state, action) => {
			state.characterList = action.payload;
			state.Loading = false;
		});
	},
});

export const { setCurrentCharacter } = CharacterSlice.actions;
export default CharacterSlice.reducer;
