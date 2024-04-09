import { pokemonApi } from 'app/apiSlice';
import {
  PokedexResponse,
  PokemonDetailsPayload,
  PokemonDetailsResponse,
  PokemonPayload
} from './types';
import { PokeAbilityResponse } from './types/pokeAbilitiyTypes';
import { PokemonSpeciesResponse } from './types/pokemonSpeciesType';

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
    //========api endpoints used==========
    getPokemonDetails: builder.query<
      PokemonDetailsResponse,
      PokemonDetailsPayload //common payload
    >({
      query(data) {
        return {
          url: data.url || '',
          method: `GET`,
          header: {}
        };
      }
    }),
    getPokemonAbility: builder.query<
      PokeAbilityResponse,
      PokemonDetailsPayload //common payload
    >({
      query(data) {
        return {
          url: data.url || '',
          method: `GET`,
          header: {}
        };
      }
    }),
    getPokemonSpecies: builder.query<
      PokemonSpeciesResponse,
      PokemonDetailsPayload //common payload
    >({
      query(data) {
        return {
          url: data.url || '',
          method: `GET`,
          header: {}
        };
      }
    })

    //====
  })
});

export const {
  useGetPokemonListQuery,
  useGetPokemonDetailsQuery,
  useGetPokemonAbilityQuery,
  useGetPokemonSpeciesQuery
} = extendedPokedexApiSlice;
