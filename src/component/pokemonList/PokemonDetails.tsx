import React from 'react';
import { Box, Card, CardContent, Paper, Typography } from '@mui/material';
import { modules } from 'modules';
import { padding } from '@mui/system';
import { PokeHeader } from './PokeDetailsHeader';
import { PokemonSprite } from './PokemonSprite';

const { useGetPokemonDetailsQuery } = modules.pokemonModule;

type Props = {
  pokemonName?: string;
};

const Component: React.FC<Props> = ({ pokemonName }) => {
  const {
    data: pokeDetails,
    isLoading,
    isFetching
  } = useGetPokemonDetailsQuery({
    url: `https://pokeapi.co/api/v2/pokemon/${pokemonName || ''}/`
  });

  return (
    <Paper elevation={1} sx={{ padding: 1 }}>
      <PokeHeader
        pokemonSpriteIcon={pokeDetails?.sprites?.front_default}
        pokeId={pokeDetails?.id}
        pokeName={pokeDetails?.name}
      />
      <PokemonSprite
        loading={isLoading || isFetching}
        imgSourceLink={pokeDetails?.sprites}
      />
    </Paper>
  );
};

export const PokemonDetails = React.memo(Component);
