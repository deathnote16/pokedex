import { useMemo } from 'react';
import { usePokemonPayload } from './use-pokemon-payload';
import { PokedexData } from './types/types';
import { cloneDeep } from 'lodash';
import { MoveLearnMethodEnum } from 'constant/enum';
import { Mfe } from 'modules/pokemon/types';

export const usePokemonData = () => {
  const { pokeDetails, pokeSpecies, pokeAbilities, pokemonTypes } =
    usePokemonPayload();

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
    return pokeSpecies?.varieties;
  }, [pokeSpecies?.varieties]);

  const pokedexData: PokedexData = useMemo(() => {
    const genusData = pokeSpecies?.genera?.filter(
      (genus) => genus.language?.name === 'en'
    );
    const getPokemonAbilities = pokeDetails?.abilities?.map((item) => {
      return {
        label: item?.ability?.name,
        url: item?.ability?.url
      };
    });

    return {
      national_no: { name: 'National ID', data: pokeDetails?.id?.toString() },
      height: { name: 'Height', data: pokeDetails?.height?.toString() },
      weight: { name: 'Weight', data: pokeDetails?.weight?.toString() },
      genus: { name: 'Genus', data: genusData },
      color: { name: 'Color', data: pokeSpecies?.color },
      abilities: { name: 'Abilities', data: getPokemonAbilities },
      generation: { name: 'Generation', data: pokeSpecies?.generation }
    };
  }, [
    pokeDetails?.abilities,
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
    //convert EV to single array values
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

    const pokemonTrainingDataObj = {
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

    return pokemonTrainingDataObj;
  }, [
    pokeDetails?.base_experience,
    pokeDetails?.stats,
    pokeSpecies?.base_happiness,
    pokeSpecies?.capture_rate,
    pokeSpecies?.growth_rate?.name
  ]);

  const pokeAbilitiesData = useMemo(() => {
    const result = pokeAbilities?.effect_entries?.find((ability) => {
      if (ability?.language?.name === 'en') {
        return ability?.effect;
      } //get english version
    });

    return { name: pokeAbilities?.name, data: result };
  }, [pokeAbilities?.effect_entries, pokeAbilities?.name]);

  const pokeBreedingData = useMemo(() => {
    const eggGroups = pokeSpecies?.egg_groups
      ?.map((eggGroups) => {
        return eggGroups?.name;
      })
      .join(', ');

    let genderString = '';

    const genderRateNum =
      pokeSpecies?.gender_rate && pokeSpecies
        ? pokeSpecies?.gender_rate || 1
        : -1;

    if (genderRateNum >= 1) {
      genderString = 'Can be Male or Female';
    } else if (genderRateNum === 0) {
      genderString = 'Only Male';
    } else if (genderRateNum === 8) {
      genderString = 'Only Female';
    } else {
      genderString = 'This pokemon is genderless (IS A CHAD)';
    }

    const breedingDataObj = [
      { label: 'Egg Groups', data: eggGroups },
      { label: 'Gender', data: genderString },
      { label: 'Egg Cycles', data: pokeSpecies?.hatch_counter }
    ];

    return breedingDataObj;
  }, [pokeSpecies]);

  const pokemonTypesData = useMemo(() => {
    const typeData = [
      {
        label: 'Effective Against',
        data: pokemonTypes?.damage_relations?.double_damage_to
      },
      {
        label: 'Weak Against',
        data: pokemonTypes?.damage_relations?.double_damage_from
      },
      {
        label: 'Less Damage To',
        data: pokemonTypes?.damage_relations?.half_damage_to
      },
      {
        label: 'Less Damage From',
        data: pokemonTypes?.damage_relations?.half_damage_from
      },
      {
        label: 'No Damage To',
        data: pokemonTypes?.damage_relations?.no_damage_to
      },
      {
        label: 'No Damage From',
        data: pokemonTypes?.damage_relations?.no_damage_from
      }
    ];

    return typeData;
  }, [pokemonTypes?.damage_relations]);

  //======= pokemon moves =======
  const pokemonMoveSetData = useMemo(() => {
    const clonedPokemonMove = cloneDeep(pokeDetails?.moves);

    const eggMoves = clonedPokemonMove?.reduce(
      (accumulator: any[], current) => {
        const hasEggMoves = current?.version_group_details?.some(
          (someEgg) =>
            someEgg?.move_learn_method?.name === MoveLearnMethodEnum.Egg
        );

        if (hasEggMoves) {
          accumulator?.push(current);
        }

        return accumulator;
      },
      []
    );

    const machineMoves = clonedPokemonMove?.reduce(
      (accumulator: any[], current) => {
        const hasMachineMoves = current?.version_group_details?.some(
          (someEgg) =>
            someEgg?.move_learn_method?.name === MoveLearnMethodEnum.Machine
        );

        if (hasMachineMoves) {
          accumulator?.push(current?.move);
        }

        return accumulator;
      },
      []
    );

    const levelMoves = clonedPokemonMove?.reduce(
      (accumulator: any[], current) => {
        const hasLevelMoves = current?.version_group_details?.some(
          (someEgg) =>
            someEgg?.move_learn_method?.name === MoveLearnMethodEnum.Level
        );

        if (hasLevelMoves) {
          accumulator?.push({
            move: current?.move,
            level_learned: current?.version_group_details
          });
        }

        return accumulator;
      },
      []
    );

    const tutorMoves = clonedPokemonMove?.reduce(
      (accumulator: any[], current) => {
        const hasTutorMoves = current?.version_group_details?.some(
          (someEgg) =>
            someEgg?.move_learn_method?.name === MoveLearnMethodEnum.Tutor
        );

        if (hasTutorMoves) {
          accumulator?.push(current?.move);
        }

        return accumulator;
      },
      []
    );

    return [
      { label: 'egg move', data: eggMoves },
      { label: 'machine move', data: machineMoves },
      { label: 'level move', data: levelMoves },
      { label: 'tutor move', data: tutorMoves }
    ];
  }, [pokeDetails?.moves]);

  return {
    isLegendaryPokemon,
    isMythicalPokemon,
    pokeStats,
    pokedexData,
    pokemonSprite,
    pokeSpeciesFlavorText,
    pokemonVarieties,
    pokemonTrainingData,
    pokeAbilitiesData,
    pokeBreedingData,
    pokemonTypesData,
    pokemonMoveSetData
  };
};
