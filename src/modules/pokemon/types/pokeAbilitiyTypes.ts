export type PokeAbilityResponse = {
  id?: number;
  name?: string;
  is_main_series?: boolean;
  generation?: Generation;
  names?: Name[];
  effect_entries?: EffectEntry[];
  effect_changes?: EffectChange[];
  flavor_text_entries?: FlavorTextEntry[];
  pokemon?: Pokemon[];
};

export type Generation = {
  name?: string;
  url?: string;
};

export type Name = {
  name?: string;
  language?: Language;
};

export type Language = {
  name?: string;
  url?: string;
};

export type EffectEntry = {
  effect?: string;
  short_effect?: string;
  language?: Language2;
};

export type Language2 = {
  name?: string;
  url?: string;
};

export type EffectChange = {
  version_group?: VersionGroup;
  effect_entries?: EffectEntry2[];
};

export type VersionGroup = {
  name?: string;
  url?: string;
};

export type EffectEntry2 = {
  effect?: string;
  language?: Language3;
};

export type Language3 = {
  name?: string;
  url?: string;
};

export type FlavorTextEntry = {
  flavor_text?: string;
  language?: Language4;
  version_group?: VersionGroup2;
};

export type Language4 = {
  name?: string;
  url?: string;
};

export type VersionGroup2 = {
  name?: string;
  url?: string;
};

export type Pokemon = {
  is_hidden?: boolean;
  slot?: number;
  pokemon?: Pokemon2;
};

export type Pokemon2 = {
  name?: string;
  url?: string;
};
