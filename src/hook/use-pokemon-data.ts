import { useMemo } from 'react';
import { usePokemonPayload } from './use-pokemon-payload';
import { PokedexData } from './types';

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

  const pokemonVarieties = useMemo(() => {
    pokeSpecies?.varieties;
  }, [pokeSpecies?.varieties]);

  const pokedexData: PokedexData = useMemo(() => {
    const genusData = pokeSpecies?.genera?.filter(
      (genus) => genus.language?.name === 'en'
    );
    return {
      national_no: { name: 'National ID', data: pokeDetails?.id?.toString() },
      height: { name: 'Height', data: pokeDetails?.height?.toString() },
      weight: { name: 'Weight', data: pokeDetails?.weight?.toString() },
      genus: { name: 'Genus', data: genusData },
      color: { name: 'Color', data: pokeSpecies?.color },
      generation: { name: 'Generation', data: pokeSpecies?.generation }
    };
  }, [
    pokeDetails?.height,
    pokeDetails?.id,
    pokeDetails?.weight,
    pokeSpecies?.color,
    pokeSpecies?.genera,
    pokeSpecies?.generation
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

  const pokemonTrainingData = useMemo(() => {
    const getEv = (pokeDetails?.stats || [])
      .filter((stats) => stats?.effort && stats?.base_stat) // Filter stats with defined effort and base_stat
      .map((stats) => {
        if (stats && stats.effort && stats.stat && stats.stat.name) {
          return `${stats.effort} ${stats.stat.name}`;
        } else {
          return ''; // Return empty string if stats or required properties are undefined
        }
      })
      .filter((formattedStat) => formattedStat !== '')
      .join(', ');

    return {
      ev_yield: { label: 'EV yield', data: getEv },
      growth_rate: {
        label: 'Growth rate',
        data: pokeSpecies?.growth_rate?.name
      },
      capture_rate: { label: 'Capture rate', data: pokeSpecies?.capture_rate },
      base_exp: {
        label: 'Base Experience',
        data: pokeDetails?.base_experience
      },
      base_happiness: {
        label: 'Base Friendship',
        data: pokeSpecies?.base_happiness
      }
    };
  }, [
    pokeDetails?.base_experience,
    pokeDetails?.stats,
    pokeSpecies?.base_happiness,
    pokeSpecies?.capture_rate,
    pokeSpecies?.growth_rate?.name
  ]);

  return {
    isLegendaryPokemon,
    isMythicalPokemon,
    pokeStats,
    pokedexData,
    pokemonSprite,
    pokeSpeciesFlavorText,
    pokemonVarieties,
    pokemonTrainingData
  };
};
