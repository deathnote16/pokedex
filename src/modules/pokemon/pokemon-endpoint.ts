import { pokemonApi } from 'app/apiSlice';
import {
  PokedexResponse,
  PokemonDetailsPayload,
  PokemonDetailsResponse,
  PokemonPayload
} from './types';

export const extendedPokedexApiSlice = pokemonApi.injectEndpoints({
  endpoints: (builder) => ({
    getPokemonList: builder.query<PokedexResponse, PokemonPayload>({
      query(data) {
        return {
          url: 'https://pokeapi.co/api/v2/pokemon',
          params: { limit: data?.limit, offset: data?.offset },
          method: `GET`,
          header: {}
        };
      }
    }),

    getPokemonDetails: builder.query<
      PokemonDetailsResponse,
      PokemonDetailsPayload
    >({
      query(data) {
        return {
          url: data.url || '',
          // params: {
          // limit: data?.limit
          // },
          method: `GET`,
          header: {}
          // invalidatesTags: [`Post`]
        };
      }
    })
    //TODO:mutation is for sending updates to the server
    // getPokemonDetails: builder.mutation<any, PokemonPayload>({
    //   query(data) {
    //     return {
    //       url: `pokemon/${data?.name}`,
    //       params: {
    //         limit: data?.limit
    //       },
    //       method: `GET`,
    //       header: {}
    //       // invalidatesTags: [`Post`]
    //     };
    //   }
    // })
  })
});

export const { useGetPokemonListQuery, useGetPokemonDetailsQuery } =
  extendedPokedexApiSlice;
