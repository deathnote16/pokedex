import { pokemonApi } from 'app/apiSlice';
import { PokedexResponse, PokemonPayload } from './types';

export const extendedPokedexApiSlice = pokemonApi.injectEndpoints({
  endpoints: (builder) => ({
    getPokemonList: builder.query<PokedexResponse, PokemonPayload>({
      query(data) {
        return {
          url: 'pokemon',
          params: { limit: data?.limit },
          method: `GET`,
          body: {},
          header: {}
        };
      }
    }),
    getPokemonDetails: builder.mutation<any, PokemonPayload>({
      query(data) {
        return {
          url: `pokemon/${data?.name}`,
          params: {
            limit: data?.limit
          },
          method: `GET`,
          header: {}
          // invalidatesTags: [`Post`]
        };
      }
    })
  })
});
