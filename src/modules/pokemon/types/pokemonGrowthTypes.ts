type PokemonGrowthResponse = {
  id?: number;
  name?: string;
  formula?: string;
  descriptions?: Description[];
  levels?: Level[];
  pokemon_species?: Language[];
};
type Level = {
  level?: number;
  experience?: number;
};
type Description = {
  description?: string;
  language?: Language;
};
type Language = {
  name?: string;
  url?: string;
};
