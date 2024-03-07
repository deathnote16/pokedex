import React from 'react';
import { Grid } from '@mui/material';
import { Box, styled } from '@mui/system';
import { PaginationPage } from 'component/pagination';
import { PokemonDetails } from 'component/Pokemon/PokemonDetailInfo/PokemonDetails';

import { usePagination, usePokemonPayload } from 'hook';
import { PokemonList } from 'component/Pokemon/PokemonList';

const FlexCenter = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});

const Component = () => {
  const { currentPage, nextPage, prevPage } = usePagination();
  const { pokemonName } = usePokemonPayload();

  return (
    <Grid container spacing={2} mt={1} mb={1}>
      <Grid item xs={12} md={8}>
        <PokemonDetails pokemonName={pokemonName} />
      </Grid>
      <Grid item xs={12} md={4}>
        <PokemonList offset={currentPage} />
        <FlexCenter mt={1}>
          <PaginationPage nextPage={nextPage} prevPage={prevPage} />
        </FlexCenter>
      </Grid>
    </Grid>
  );
};

export const PokemonSection = React.memo(Component);
