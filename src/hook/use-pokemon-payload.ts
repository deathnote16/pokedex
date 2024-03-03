import { modules } from 'modules';
import { useAppSelector } from './use-app-selector';
import { useAppDispatch } from './use-app-dispatch';
import { useCallback } from 'react';

const { actions: pokemonPayloadAction, selectors: pokemonPayloadSelector } =
  modules.apiPayload;

export const usePokemonPayload = () => {
  const dispatch = useAppDispatch();
  const pokemonName = useAppSelector(
    pokemonPayloadSelector.pokemonNameSelector
  );

  const getPokemonName = useCallback(
    (pokeName?: string) => {
      dispatch(pokemonPayloadAction.getPokemonName(pokeName));
    },
    [dispatch]
  );
  return { pokemonName, getPokemonName };
};
