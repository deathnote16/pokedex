import React from 'react';
import { Box, Card, CardContent, Paper, Typography } from '@mui/material';
import { modules } from 'modules';
import { padding } from '@mui/system';
import { PokeHeader } from './PokeDetailsHeader';

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
    url: `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`
  });

  if (isLoading || isFetching) {
    return <Typography>{`Is loading....`}</Typography>;
  }
  return (
    <Paper elevation={1} sx={{ padding: 1 }}>
      <Card sx={{ p: 3 }}>
        <PokeHeader pokeId={pokeDetails?.id} pokeName={pokeDetails?.name} />
      </Card>
    </Paper>
  );
};

export const PokemonDetails = React.memo(Component);
