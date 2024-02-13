import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  //TODO: for now I remove the base URL because the api response provide a full api url
  // baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  baseQuery: fetchBaseQuery({}),
  tagTypes: ['Post'],
  endpoints: () => ({})
});

// Export the auto-generated hook for the `getPosts` query endpoint
// export const { useGetPostsQuery } = apiSlice;
