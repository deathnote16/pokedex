export type PokemonPayload = {
  limit?: number;
  name?: string;
  offset?: number;
};
export type PokedexResponse = {
  count: number;
  next: string;
  previous: any;
  results: Pokemon[];
};

export type Pokemon = {
  name: string;
  url: string;
};
