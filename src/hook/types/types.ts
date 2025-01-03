import { CommonTypeDataWithUrl } from 'global-types';
import {
  Color,
  Genera,
  Generation,
  PokedexNumber
} from 'modules/pokemon/types/pokemonSpeciesType';

export type PokedexData = {
  national_no?: CommonDataType;
  height?: CommonDataType;
  weight?: CommonDataType;
  genus?: GeneraType;
  color?: ColorType;
  pokedex_entry?: pokedexNumberType;
  abilities?: PokeAbilitiesType;
  generation?: GenerationType;
};

export type CommonDataType = {
  name?: string;
  data?: string | number;
};

export type GeneraType = {
  name?: string;
  data?: Genera[];
};

export type ColorType = {
  name?: string;
  data?: Color;
};

export type pokedexNumberType = {
  name?: string;
  data?: PokedexNumber[];
};

export type GenerationType = {
  name?: string;
  data?: Generation;
};

export type PokeAbilitiesType = {
  name?: string;
  data?: CommonTypeDataWithUrl[];
};

export type PokeAbilitiesMetaType = {
  label?: string;
  url?: string;
};
