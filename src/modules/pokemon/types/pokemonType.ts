export type PokeTypeResponse = {
  damage_relations?: DamageRelations;
  game_indices?: Index[];
  generation?: Generation2;
  id?: number;
  move_damage_class?: MoveDamageClass;
  moves?: Mfe[];
  name?: string;
  names?: Name[];
  past_damage_relations?: any[];
  pokemon?: Pokemon[];
};

export type DamageRelations = {
  double_damage_from?: DoubleDamageFrom[];
  double_damage_to?: DoubleDamageTo[];
  half_damage_from?: HalfDamageFrom[];
  half_damage_to?: HalfDamageTo[];
  no_damage_from?: NoDamageFrom[];
  no_damage_to?: NoDamageTo[];
};

export type DoubleDamageFrom = {
  name?: string;
  url?: string;
};

export type DoubleDamageTo = {
  name?: string;
  url?: string;
};

export type HalfDamageFrom = {
  name?: string;
  url?: string;
};

export type HalfDamageTo = {
  name?: string;
  url?: string;
};

export type NoDamageFrom = {
  name?: string;
  url?: string;
};

export type NoDamageTo = {
  name?: string;
  url?: string;
};

export type Index = {
  game_index?: number;
  generation?: Generation;
};

export type Generation = {
  name?: string;
  url?: string;
};

export type Generation2 = {
  name?: string;
  url?: string;
};

export type MoveDamageClass = {
  name?: string;
  url?: string;
};

export type Mfe = {
  name?: string;
  url?: string;
};

export type Name = {
  language?: Language;
  name?: string;
};

export type Language = {
  name?: string;
  url?: string;
};

export type Pokemon = {
  pokemon?: Pokemon2;
  slot?: number;
};

export type Pokemon2 = {
  name?: string;
  url?: string;
};
