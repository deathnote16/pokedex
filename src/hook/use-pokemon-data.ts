import { useMemo } from 'react';
import { usePokemonPayload } from './use-pokemon-payload';

export const usePokemonData = () => {
  const { pokeDetails, pokeSpecies } = usePokemonPayload();

  const isLegendaryPokemon = useMemo(
    () => pokeSpecies?.is_legendary,
    [pokeSpecies?.is_legendary]
  );

  const isMythicalPokemon = useMemo(
    () => pokeSpecies?.is_mythical,
    [pokeSpecies?.is_mythical]
  );

  const pokeStats = useMemo(() => pokeDetails?.stats, [pokeDetails?.stats]);

  const pokedexData = useMemo(() => {
    const genusData = pokeSpecies?.genera?.filter(
      (genus) => genus.language?.name === 'en'
    );
    return {
      national_no: pokeDetails?.id,
      game_indices: pokeDetails?.game_indices,
      height: pokeDetails?.height,
      weight: pokeDetails?.weight,
      genus: genusData
    };
  }, [
    pokeDetails?.game_indices,
    pokeDetails?.height,
    pokeDetails?.id,
    pokeDetails?.weight,
    pokeSpecies?.genera
  ]);

  const pokemonSprite = useMemo(
    () => pokeDetails?.sprites?.other?.['official-artwork']?.front_default,
    [pokeDetails?.sprites?.other]
  );

  const pokeSpeciesFlavorText = useMemo(
    () =>
      pokeSpecies?.flavor_text_entries?.filter((flavorText, index) => {
        return (
          //get the latest description only and language english
          flavorText?.language?.name === 'en' &&
          (flavorText?.version?.name === 'red' ||
            flavorText?.version?.name === 'firered' ||
            flavorText?.version?.name === 'crystal' ||
            flavorText?.version?.name === 'soulsilver' ||
            flavorText?.version?.name === 'emerald' ||
            flavorText?.version?.name === 'omega-ruby' ||
            flavorText?.version?.name === 'black' ||
            flavorText?.version?.name === 'x' ||
            flavorText?.version?.name === 'sun' ||
            flavorText?.version?.name === 'sword' ||
            flavorText?.version?.name === 'scarlet')
        );
      }),
    [pokeSpecies?.flavor_text_entries]
  );

  return {
    isLegendaryPokemon,
    isMythicalPokemon,
    pokeStats,
    pokedexData,
    pokemonSprite,
    pokeSpeciesFlavorText
  };
};
