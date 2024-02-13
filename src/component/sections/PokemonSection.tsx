import { Grid } from '@mui/material';
import { Box, styled } from '@mui/system';
import { MainLayout } from 'component/layout';
import { PaginationPage } from 'component/pagination';
import { PokemonDetails } from 'component/pokemonList/PokemonDetails';
import { PokemonList } from 'component/pokemonList/PokemonList';
import { usePagination } from 'hook';
import { modules } from 'modules';
import React, { useState } from 'react';

const { useGetPokemonDetailsQuery } = modules.pokemonModule;

const FlexCenter = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});

const Component = () => {
  const { currentPage, nextPage, prevPage } = usePagination();
  const [pokemonDetails, setPokemonDetails] = useState<string>();

  return (
    <Grid container spacing={1} mt={1} mb={1}>
      <Grid item xs={12} md={7}>
        <PokemonDetails pokemonName={pokemonDetails} />
      </Grid>
      <Grid item xs={12} md={5}>
        <PokemonList
          offset={currentPage}
          onClickPokemonDetils={(pokemonName?: string) =>
            setPokemonDetails(pokemonName)
          }
        />
        <FlexCenter mt={1}>
          <PaginationPage nextPage={nextPage} prevPage={prevPage} />
        </FlexCenter>
      </Grid>
    </Grid>
  );
};

export const PokemonSection = React.memo(Component);
