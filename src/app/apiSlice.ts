import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pokemonApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  tagTypes: ['Post'],
  endpoints: () => ({})
});

// Export the auto-generated hook for the `getPosts` query endpoint
// export const { useGetPostsQuery } = apiSlice;
