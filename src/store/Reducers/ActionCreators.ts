import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../../utils/constants';
import axios from 'axios';

export const getSingleCharacter = createAsyncThunk(
	'character/getSingleCharacter',
	async (data: string[]) => {
		const newData = await Promise.all(
			data.map(async (item) => {
				const promises = await axios.get(
					`${BASE_URL}characters/${item}`
				);

				const result = promises.data;
				result.info = item;
				return result;
			})
		);

		return newData;
	}
);
