import React from 'react';
import { Box, Card, CardContent, Grid, Paper, Typography } from '@mui/material';
import { modules } from 'modules';
import { padding } from '@mui/system';
import { PokeHeader } from './PokeDetailsHeader';
import { PokemonSprite } from './PokemonSprite';
import { PokemonStats } from './PokemonStats';
import { PokeGeneralInfo } from './PokeGeneralInfo';

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
    url: `https://pokeapi.co/api/v2/pokemon/${pokemonName || 'bulbasaur'}/`
  });

  return (
    <Paper elevation={1} sx={{ padding: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <PokeHeader
            pokemonSpriteIcon={pokeDetails?.sprites?.front_default}
            pokeId={pokeDetails?.id}
            pokeName={pokeDetails?.name}
          />
        </Grid>
        <Grid item sm={12} md={6}>
          <PokemonSprite
            loading={isLoading || isFetching}
            imgSourceLink={pokeDetails?.sprites}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <PokeGeneralInfo
            pokemonType={pokeDetails?.types}
            pokeAbilities={pokeDetails?.abilities}
            weight={pokeDetails?.weight}
            height={pokeDetails?.height}
          />
          <PokemonStats pokemonType={pokeDetails?.types} />
        </Grid>
      </Grid>
    </Paper>
  );
};

export const PokemonDetails = React.memo(Component);
