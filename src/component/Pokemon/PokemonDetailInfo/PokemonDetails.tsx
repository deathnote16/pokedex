import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import { modules } from 'modules';
import { padding } from '@mui/system';

import { PokeHeader, PokemonNameBg } from 'component/Pokemon/PokemonNameHeader';
import { PokemonSprite } from '../PokemonSprite';
import { PokeGeneralInfo } from '../PokemonGeneralInfo';
import { PokemonStats } from '../PokemonStat';
import { FlexBox } from 'component/BoxLayout/Boxes';
import Image from 'next/image';
import { usePokemonPayload } from 'hook';

const { useGetPokemonDetailsQuery } = modules.pokemonModule;

type Props = {
  // pokemonName?: string;
};

const Component: React.FC<Props> = ({}) => {
  const { pokemonName } = usePokemonPayload();
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
            isLoading={isLoading || isFetching}
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
          <PokemonStats />
        </Grid>
      </Grid>
    </Paper>
  );
};

export const PokemonDetails = React.memo(Component);
