import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../utils/constants';
// import { ICharacter } from '../models/ICharacter';

export const CharactersApi = createApi({
	reducerPath: 'CharactersApi',
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
	endpoints: (builder) => ({
		getData: builder.query<string[], void>({
			query: () => 'characters/',
		}),
	}),
});

export const { useGetDataQuery } = CharactersApi;
