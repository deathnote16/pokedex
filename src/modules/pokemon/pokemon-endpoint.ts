import { pokemonApi } from 'app/apiSlice';
import {
  PokedexResponse,
  PokemonDetailsPayload,
  PokemonDetailsResponse,
  PokemonPayload
} from './types';
import { PokeAbilityResponse } from './types/pokeAbilitiyTypes';
import { PokemonSpeciesResponse } from './types/pokemonSpeciesType';
import { PokeTypeResponse } from './types/pokemonType';
import { PokemonTypesPayload } from 'modules/apiPayload/types';

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
    }),

    getPokemonGrowthRate: builder.query<
      PokemonGrowthResponse,
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

    getPokemonType: builder.query<
      PokeTypeResponse,
      PokemonTypesPayload //common payload
    >({
      query(data) {
        return {
          url: data.pokeType || '',
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
  useGetPokemonSpeciesQuery,
  useGetPokemonGrowthRateQuery,
  useGetPokemonTypeQuery
} = extendedPokedexApiSlice;
