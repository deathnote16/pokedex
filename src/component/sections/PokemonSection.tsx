import React from 'react';
import { Grid } from '@mui/material';
import { Box, styled } from '@mui/system';
import { PokemonDetails } from 'component/Pokemon/PokemonDetailInfo/PokemonDetails';

const FlexCenter = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});

const Component = () => {
  // const { pokemonName } = usePokemonPayload();

  return (
    <Grid container spacing={2} mt={1} mb={1}>
      <Grid item xs={12} md={12}>
        <PokemonDetails />
      </Grid>
    </Grid>
  );
};

export const PokemonSection = React.memo(Component);
